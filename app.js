const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Boston, MA",
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    name: "Jen Smith",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Folsom, CA",
    image: "https://randomuser.me/api/portraits/women/82.jpg"
  },
  {
    name: "Kendrick Smith",
    age: 42,
    gender: "male",
    lookingfor: "female",
    location: "Lynn, MA",
    image: "https://randomuser.me/api/portraits/men/81.jpg"
  }
];

const profiles = profileIterator(data);

nextProfile();
//Next Event
document.getElementById("next").addEventListener("click", nextProfile);

//Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} Looking For: ${currentProfile.lookingfor}</li>
    </ul>
  `;

    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    //No more profiles
    window.location.reload();
  }
}

//Profile Iteration
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}

//Iterator Ex
// function nameIterator(names) {
//   let nextIndex = 0;
//   return {
//     next: function() {
//       return nextIndex < names.length
//         ? {
//             value: names[nextIndex++],
//             done: false
//           }
//         : { done: true };
//     }
//   };
// }

// //Create an array of names
// const namesArr = ["Jack", "Jill", "John"];
// const names = nameIterator(namesArr);
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());
// console.log(names.next());

//Generator Example
// function* sayNames() {
//   yield "Jack";
//   yield "Jill";
//   yield "John";
// }

// const name = sayNames();

// console.log(name.next().value);

// //ID Creator
// function* createIds() {
//   let index = 0;
//   while (true) {
//     yield index++;
//   }
// }

// const gen = createIds();

// console.log(gen.next().value);
