import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userGet = createAsyncThunk("user", async () => {
  try {
    const res = await axios.get(`http://localhost:3000/user/get`);
    // console.log("frontend get response", res);
    return res.data.user;
  } catch (error) {
    console.log("frontend get error", error);
  }
});

// create user
const userPost = createAsyncThunk("userPost", async (person) => {
  try {
    const res = await axios.post(`http://localhost:3000/user/create`, person);
    console.log("frontend get response", res);
    console.log("person", person);
    return res.data.user;
  } catch (error) {
    console.log("frontend get error", error);
  }
});

// update user
// const userUpdate = createAsyncThunk("userUpdate", async ({ data }) => {
//   try {
//     const res = await axios.put(`http://localhost:3000/user/update/${data.id}`,{
//       name: data.name,
//       email: data.email,
//       contact: data.contact
//     });
//     console.log("responce is ", res.data.user);
//     console.log("id is ", id);
//     return res.data.user;
//   } catch (error) {
//     console.log(error);
//   }
// });


// Redux Thunk for updating user
const userUpdate = createAsyncThunk("userUpdate", async ({ id, name, email, contact }) => {
  try {
    const res = await axios.put(`http://localhost:3000/user/update/${id}`, {
      name,
      email,
      contact,
    });
    console.log("Response is", res.data.user);
    return res.data.user;
  } catch (error) {
    console.log(error);
    throw error; // It is good practice to throw error so it can be caught by the rejected case
  }
});


const userDelete = createAsyncThunk("userDelete", async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/user/delete/${id}`);
    console.log("responce is ", res.data.user);
    console.log("id is ", id);
    return res.data.user;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  userList: [],
  userCreate: null,
  isUserUpdate: null,
  userDelete: null,
  isLoading: false,
  isError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get user
    builder.addCase(userGet.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(userGet.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userList = action.payload;
    });

    builder.addCase(userGet.rejected, (state) => {
      state.isError = true;
    });

    //user post
    builder.addCase(userPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userPost.fulfilled, (state, action) => {
      state.userCreate = action.payload;
      state.isLoading = false;
    });
    builder.addCase(userPost.rejected, (state) => {
      state.isError = true;
    });

    //update user
    builder.addCase(userUpdate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userUpdate.fulfilled, (state, action) => {
      state.isUserUpdate = action.payload;
      state.isLoading = false;
    });
    builder.addCase(userUpdate.rejected, (state) => {
      state.isError = true;
    });

    //delete user
    builder.addCase(userDelete.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userDelete.fulfilled, (state, action) => {
      state.userDelete = action.payload;
      state.isLoading = false;
    });
    builder.addCase(userDelete.rejected, (state) => {
      state.isError = true;
    });
  },
});

export { userGet, userPost, userUpdate, userDelete };
export default userSlice.reducer;
