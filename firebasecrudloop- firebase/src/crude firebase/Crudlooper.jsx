import React, { useEffect, useState } from 'react'
import { addDoc, deleteDoc, getDoc, updateDoc, collection, doc, onSnapshot, query, getDocs } from 'firebase/firestore'
import './crud.css'
import { v4 as uuidv4 } from 'uuid';
import { db } from './firebase-config'

const Crudlooper = () => {
  const [data, setdata] = useState({
    name: "",
    email: ""
  })
  const [userdata, setuserdata] = useState([])
  // namesandemails

  const usercollectionref = collection(db, "namesandemails")



  // useEffect(()=>{

  //   const getData = async () => {
  //     const datas = await getDocs(usercollectionref)
  //     console.log(datas.docs.map((doc) => (
  //       {

  //       }
  //     )))

  //   }
  //   getData()
  // }
  // ,[])


  useEffect(() => {
    const qr = query(usercollectionref)
    const gettingData = onSnapshot(qr, (Qsnapping) => {
      let myDataset = []
      Qsnapping.forEach((i) => {
        myDataset.push({
          ...i.data(), id: i.id
        })
      })
      setuserdata(myDataset)


    })
    return () => gettingData()
  }, [])





    const handlechange = (e) => {
      const { name, value } = e.target
      setdata(
        {
          ...data,
          id: uuidv4(),
          [name]: value
        }
      )
    }
    // console.log(data)

    // const postData = async (e) => {


    //   await
    //     fetch()

    // }

    const saveData = async (e) => {
      e.preventDefault()
      await addDoc(usercollectionref, data);
      alert('inserted data succesfully')
    }
    const deleteData = async (id) => {
      await deleteDoc(doc(db, "namesandemails", id))
      alert("data deleted succesfully")
    }
    const editData = async (id) => {
      const user = userdata.find((user) => items.id === id)
      setuserdata(
        {
          name: user.name,
          email: user.email
        }

      )
    }
    console.log(userdata)

















    return (
      <div>
        <div className="container">
          <h2>CRUD Operations Table</h2>
          {/* Input Form */}
          <form id="crud-form" className="crud-form" method='POST' onSubmit={saveData}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                required=""
                value={data.name}
                onChange={handlechange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                required=""
                value={data.email}
                onChange={handlechange}
              />
            </div>
            {/* <button type="submit" className="submit-btn" onClick={postData}>
            Add Record
          </button> */}

            <input type="submit" className=" submit-btn" value=" saveData" />
          </form>
          <table className="crud-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userdata.map((items, index) => (
                <tr key={items.id}>
                  <td>{index + 1}</td>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>
                    <button className="edit-btn" onClick={() => editData(items.id)}>Edit</button>
                    <button className="delete-btn" onClick={() => deleteData(items.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </div>
    )
  }

export default Crudlooper
