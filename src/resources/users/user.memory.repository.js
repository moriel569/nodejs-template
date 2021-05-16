const USERS =[]

const getAll = async () => USERS

const getById = async id => USERS.find(user => user.id === id)

const createUser = async user => USERS.push(user)

const updateUser = async (id,userInfo) => {
  const userIndex = USERS.findIndex(user => user.id === id)
  const updatedInfo = {...userInfo,id}
 if(userIndex === -1) {
   return {}
 }
 USERS[userIndex] = updatedInfo
return updatedInfo
}

const deleteUser = async id => {
  const userIndex = USERS.findIndex(user => user.id === id)
  return userIndex === -1 ? {} : USERS.splice(userIndex, 1) 
}

module.exports = { getAll,getById,createUser,updateUser,deleteUser };
