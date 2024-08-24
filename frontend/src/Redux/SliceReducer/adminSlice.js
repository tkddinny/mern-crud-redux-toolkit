import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const adminCreate = createAsyncThunk("userAdmin/adminCreate", async (admin) => {
  try {
    const res = await axios.post(
      `http://localhost:3000/register/create`,
      admin
    );
    localStorage.setItem("token", res.data.token);
    console.log(`adminCreate token: ${res.data.token}`);
    console.log(`adminCreate res: ${JSON.stringify(res.data)}`);
    console.log(`adminCreate admin: ${JSON.stringify(admin)}`);

    return res.data.register;
  } catch (error) {
    console.log("adminCreate err:", error);
  }
});

const adminLogin = createAsyncThunk("userAdmin/createLogin", async (admin) => {
  try {
    const res = await axios.post(`http://localhost:3000/register/login`, admin);
    localStorage.setItem("token", res.data.token);
    console.log(`adminLogin token:${res.data.token}`);
    console.log(`adminLogin res:${res.data.admin}`);
    return res.data.register;
  } catch (error) {
    console.log("adminLogin err:", error.message);
  }
});

const initialState = {
  token: localStorage.getItem("token"),
  adminCreate: null,
  // adminList: [],
  // loginCreate: null,
  isLoading: false,
  isError: false,
};

const adminSlice = createSlice({
  name: "userAdmin",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    // create admin
    builder.addCase(adminCreate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(adminCreate.fulfilled, (state, action) => {
      state.adminCreate = action.payload;
      state.isLoading = false;
    });
    builder.addCase(adminCreate.rejected, (state) => {
      state.isError = true;
    });
    //get admin
    // builder.addCase(getAdmin.pending, (state) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(getAdmin.fulfilled, (state, action) => {
    //   state.adminList = action.payload;
    //   state.isLoading = false;
    // });
    // builder.addCase(getAdmin.rejected, (state) => {
    //   state.isError = true;
    // });
    // create admin
    builder.addCase(adminLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(adminLogin.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isLoading = false;
    });
    builder.addCase(adminLogin.rejected, (state) => {
      state.isError = true;
      // state.isError = error.message;
      // console.log(state.isError);
    });
  },
});

export { adminCreate, adminLogin };
export const { logout } = adminSlice.actions;
export default adminSlice.reducer;
