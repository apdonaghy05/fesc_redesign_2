let board_members = [
  {name: "Dr. David Norton",
    title: "Interim Director",
    email: "dpnorton@ufl.edu",
    imgSource: "docs/images/board_member_1.png"
  },{name: "Ms. Canan “Janan” Balaban",
    title: "Associate Director",
    email: "cbalaban@ufl.edu",
    imgSource: "docs/images/board_member_2.png"
  }
]

document.addEventListener("DOMContentLoaded", function(){

  let profileListings = new Vue({
    el: '#profileListings',
    data: {
      profiles: board_members
    }
    
  })

})
