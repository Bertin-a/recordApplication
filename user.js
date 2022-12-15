let user=[
    {
    record: "Bertina Ayuure",
    id:1,
    created_at: "10:22 am"
},
{
    record: 'Ayuure Alphonsa',
    id:2,
    created_at: "9:34 pm"

},
{
    record: 'Ayuure Bernard',
    id:3,
    created_at: "9:32 pm"
},
{
    record: 'Ayuure Juliet',
    id:4,
    created_at: "9:04 am"

}
    
]
console.log("Before deleting"+user)
delete user[1]

console.log("After deleting"+user)

user.push({record: "james",
         id: 5,
        created_at:"3:00pm"})

        console.log(user)

    user[0].record= "alphonee"
  

    console.log("after updating a user"+user)




    

