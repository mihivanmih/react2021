

export const updateObjectInArray = (items, userId, objPropName, newObjProps) => {

    return items.map( user => {
    //  if(user.id === userId) {
    if(user.[objPropName] === userId) {
        //return { ...user, followed: true}
        return { ...user, ...newObjProps}
    }
    return user
    })

}