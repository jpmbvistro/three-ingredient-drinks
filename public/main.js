var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down");
var trash = document.getElementsByClassName("fa-trash-o");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
  console.log('tdown')
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('tDown', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp':thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

/*****************
====Add Recipe===
*****************/
document.querySelector('#addDrink').addEventListener('click', function(){
  fetch('drinks', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': document.querySelector('#drinkName').value,
      'authorID': document.querySelector('#userID').innerText,
      'authorName':  document.querySelector('#userEmail').innerText,
      'mixMode': document.querySelector('#mixMode').value,
      'ingredient1':document.querySelector('#newIngredient1').value,
      'ingredient2':document.querySelector('#newIngredient2').value,
      'ingredient3':document.querySelector('#newIngredient3').value
    })

  }).then(function (response) {
    window.location.reload()
  })
})

/***************************
=======Delete Recipe=======
***************************/
document.querySelectorAll('.delete').forEach((item, i)=>{
  item.addEventListener('click', element =>{
    fetch('drinks', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: element.currentTarget.parentElement.id
      })
    }).then(function (response) {
      console.log(response.body)
      window.location.reload()
    })
  })
})

/***************************
=======Nice Button=======
***************************/
document.querySelectorAll('.nice').forEach((item, i) => {
  item.addEventListener('click', element => {
    fetch('drinks', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        id: element.currentTarget.parentElement.id,
        nice: element.currentTarget.getAttribute('nice')
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  })
});



/**Aside panel functionality**/
document.querySelector('.info-button').addEventListener('click', toggleAside)
document.querySelector('#hide-aside').addEventListener('click', toggleAside)

function toggleAside(){       document.querySelector('aside').classList.toggle('reveal')
}
/**Aside Panel end*/
