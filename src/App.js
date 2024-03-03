// // // import './index.css'

// // // const topDesserts =[
// // //   {
// // //     id:"1",
// // //     title:"carrot cake",
// // //     description:"The best",
// // //     image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.smalltownwoman.com%2Fwp-content%2Fuploads%2F2020%2F02%2FCarrot-Cake-DSC_2182-scaled.webp&tbnid=1wZoeufIkDDJhM&vet=12ahUKEwiNkbWexKCDAxXzpCcCHTM8B5gQMygGegQIARBo..i&imgrefurl=https%3A%2F%2Fwww.smalltownwoman.com%2Fbest-carrot-cake-recipe%2F&docid=gBSlaLXG3L1NBM&w=924&h=1386&q=favourite%20dessert%20in%20usa%20carrot%20cake&ved=2ahUKEwiNkbWexKCDAxXzpCcCHTM8B5gQMygGegQIARBo",
// // //     price:"13.00"
// // //   },
// // //   {
// // //     id:"2",
// // //     title:"milkshake",
// // //     description:"super amazing",
// // //     image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.tasteofhome.com%2Fwp-content%2Fuploads%2F2018%2F07%2FFacebook-Molly-Moons-Homemade-Ice-Cream.jpg&tbnid=d0Zeg0aNmCL2aM&vet=12ahUKEwjwzbb9w6CDAxWCA_sDHeFJADoQMygEegQIARBU..i&imgrefurl=https%3A%2F%2Fwww.tasteofhome.com%2Fcollection%2Fthe-best-milkshake-spots-in-america%2F&docid=DMrgoN_3bl9cwM&w=1200&h=1200&q=favourite%20dessert%20in%20usa%20milkshakes&ved=2ahUKEwjwzbb9w6CDAxWCA_sDHeFJADoQMygEegQIARBU",
// // //     price:"9.50"
// // //   },
// // //   {
// // //     id:"3",
// // //     title:"fudge",
// // //     description:"wow! indiscribable",
// // //     image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.inthekitchenwithmatt.com%2Fwp-content%2Fuploads%2F2020%2F12%2Fcreamy-old-fashioned-fudge.jpg&tbnid=aCUbQhcIow7GYM&vet=12ahUKEwjqj6PluaCDAxVRoScCHRCJAuoQMygAegQIARBH..i&imgrefurl=https%3A%2F%2Fwww.inthekitchenwithmatt.com%2Fmost-popular-desserts-in-america&docid=96_WkpQIMk6GeM&w=1024&h=576&q=favourite%20dessert%20in%20usa%20fudge&ved=2ahUKEwjqj6PluaCDAxVRoScCHRCJAuoQMygAegQIARBH",
// // //     price:"11.00"
// // //   }
// // // ];

// // // function App(){
// // //     const listItems = topDesserts.map(dessert =>{
// // //     const itemText= `${dessert.title} -
// // //      ${dessert.price}`
// // //      return <li>{itemText}</li>
// // //     })
// // //     return(
// // //       <div>
// // //         <ul>
// // //           {listItems}
// // //         </ul>
// // //       </div>
// // //     )
// // //   }

// // // export default App;


// // // import "./App.css";
// // // import DessertsList from "./DessertsList";

// // // const desserts = [
// // //   {
// // //     name: "Chocolate Cake",
// // //     calories: 400,
// // //     createdAt: "2022-09-01",
// // //   },
// // //   {
// // //     name: "Ice Cream",
// // //     calories: 200,
// // //     createdAt: "2022-01-02",
// // //   },
// // //   {
// // //     name: "Tiramisu",
// // //     calories: 300,
// // //     createdAt: "2021-10-03",
// // //   },
// // //   {
// // //     name: "Cheesecake",
// // //     calories: 600,
// // //     createdAt: "2022-01-04",
// // //   },
// // // ];

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <h2>List of low calorie desserts:</h2>
// // //       <DessertsList data={desserts} />
// // //     </div>
// // //   );
// // // }

// // // export default App;


// // //using keys
// // import './index.css'
// // import {useState} from "react"

// // const ToDo = props =>(
// //   <tr>
// //     <td>
// //       <label>{props.id}</label>
// //     </td>
// //     <td>
// //       <input/>
// //     </td>
// //     <td>
// //     <label>{props.createdAt}</label>
// //     </td>
// //   </tr>
// // );


// // function App(){
// //   const[todos, setTodos] = useState([{
// //     id:'todo1',
// //     createdAt:'18:00',
// //   },
// //   {
// //     id:'todo2',
// //     createdAt:'19:00',
// //   }]);

// //   const reverseOrder = () =>{
// //     setTodos([...todos].reverse());
// //   }

// //   return(
// //     <div>
// //       <button onClick={reverseOrder}>Reverse</button>
// //       <table>
// //         <tbody>
// //           {todos.map((todo, index) =>(
// //             <ToDo key = {index} id={todo.id} createdAt= {todo.createdAt}/>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default App;


// //form submission

// // import './App.css';
// // import {useState} from "react";

// // function App(){
// //   const[name, setName] = useState("name");

// //   const handleSubmit = (e) =>{
// //     e.preventDefault();
// //     setName("");
// //     console.log("Form is submitted")
// //   }
// //   return(
// //     <div className="App">
// //       <form onSubmit = {handleSubmit}>
// //         <fieldset>
// //           <div className = "field">
// //             <label htmlFor='name'>Name:</label>
// //             <input
// //             id="name" 
// //             type = "text" 
// //             placeholder ="name" name ="name" value={name} onChange ={e =>setName(e.target.value)}/>
// //           </div>
// //           <button disabled={!name} type ="submit">Submit</button>
// //         </fieldset>
// //       </form>
// //     </div>
// //   )
// // };

// // export default App;


// // import './App.css';
// // import {useState} from "react";

// // function App(){
// //   const[score, setScore] = useState("10");
// //   const[comment, setComment] = useState("");

// //   const handleSubmit = (e) =>{
// //     e.preventDefault();
// //     if(Number(score)<=5 && comment.length<=10){
// //       alert("Write a comment to explain why your eaxperience was poor")
// //       return;
// //     }
// //     console.log("Form submitted!")
// //     setComment("");
// //     setScore("10");
// //   }

// //   return(
// //     <div className="App">
// //       <form onSubmit={handleSubmit}>
// //         <fieldset>
// //           <h2>Feedback form:</h2>
// //           <div className = "field">
// //             <label >Score:  {score} </label>
// //             <input type = "range" min ="0" max="10" value={score} onChange={e =>setScore(e.target.value)}
// //             />
// //           </div>
// //           <div className = "field">
// //             <label >Comment:  {comment} </label>
// //             <textarea value={comment} onChange={e =>setComment(e.target.value)}/>
// //           </div>
// //           <button  type ="submit">Submit</button>
// //         </fieldset>
// //       </form>
// //     </div>
// //   )
// // };

// // export default App;

// // import "./App.css";
// // import { useState } from "react";
// // import { validateEmail } from "./utils";

// // const PasswordErrorMessage = ({password}) => {
// //   if (password.isTouched && password.value.length <8) {
// //     return (
// //       <p className="FieldError">Password should have at least 8 characters</p>
// //     );
// //   }else{
// //     return null;
// //   }
// // }
// // function App() {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState({
// //     value: "",
// //     isTouched: false,
// //   });
// //   const [role, setRole] = useState("role");

// //   const getIsFormValid = (firstName, email, password, role) => {
// //     const isFirstNameValid = firstName.trim() !== "";
// //     const isEmailValid = email.trim() !== "" && validateEmail(email);
// //     const isPasswordValid = password.length >= 8;
// //     const isRoleNameValid = role === "individual" || role ==="business";

// //     return isFirstNameValid && isEmailValid && isPasswordValid && isRoleNameValid;
// //   };
// //   const clearForm = () => {
// //     setFirstName("");
// //     setLastName("");
// //     setEmail("");
// //     setPassword("");
// //     setPassword({ value: "", isTouched: false });
// //     setRole("role");      
// //     }
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if(getIsFormValid()){
// //       alert("Account created!");
// //       clearForm();
// //     }else{
// //       alert("Please fill out the form correctly")
// //     }
// //   }
// //   return (
// //     <div className="App">
// //       <form onSubmit={handleSubmit}>
// //         <fieldset>
// //           <h2>Sign Up</h2>
// //           <div className="Field">
// //             <label>
// //               First name <sup>*</sup>
// //             </label>
// //             <input placeholder="First name"
// //             value={firstName} onChange={e =>setFirstName(e.target.value)}/>
// //           </div>
// //           <div className="Field">
// //             <label>Last name</label>
// //             <input placeholder="Last name"
// //             value={lastName} onChange={e =>setLastName(e.target.value)}/>
// //           </div>
// //           <div className="Field">
// //             <label>
// //               Email address <sup>*</sup>
// //             </label>
// //             <input placeholder="Email address" value={email} onChange={e =>setEmail(e.target.value)}/>
// //           </div>
// //           <div className="Field">
// //             <label>
// //               Password <sup>*</sup>
// //             </label>
// //             <input placeholder="Password" value={password} onChange={e =>setPassword(e.target.value)}/>
// //           </div>
// //           <PasswordErrorMessage password={password} />
// //           <div className="Field">
// //             <label>
// //               Role <sup>*</sup>
// //             </label>
// //             <select value={role} onChange={(e) => setRole(e.target.value)}>
// //               <option value="role">Role</option>
// //               <option value="individual">Individual</option>
// //               <option value="business">Business</option>
// //             </select>
// //           </div>
// //           <button type="submit" disabled={!getIsFormValid()}>
// //             Create account
// //           </button>
// //         </fieldset>
// //       </form>
// //     </div>
// //   );
// //   }
// // export default App;

// // import './App.css'; 
// // import {useState} from "react"; 
// // import {validateEmail} from "../src/utils"; 
 
// // const PasswordErrorMessage = () => { 
// //  return ( 
// //    <p className="FieldError">Password should have at least 8 characters</p> 
// //  ); 
// // }; 
 
// // function App() { 
// //  const [firstName, setFirstName] = useState(""); 
// //  const [lastName, setLastName] = useState(""); 
// //  const [email, setEmail] = useState(""); 
// //  const [password, setPassword] = useState({ 
// //    value: "", 
// //    isTouched: false, 
// //  }); 
// //  const [role, setRole] = useState("role"); 

// //  const getIsFormValid = () => { 
// //    return ( 
// //      firstName && 
// //      validateEmail(email) && 
// //      password.value.length >= 8 && 
// //      role !== "role" 
// //    ); 
// //  }; 
 
// //  const clearForm = () => { 
// //    setFirstName(""); 
// //    setLastName(""); 
// //    setEmail(""); 
// //    setPassword({ 
// //      value: "", 
// //      isTouched: false, 
// //    }); 
// //    setRole("role"); 
// //  }; 
 
// //  const handleSubmit = (e) => { 
// //    e.preventDefault(); 
// //    alert("Account created!"); 
// //    clearForm(); 
// //  }; 
 
// //  return ( 
// //    <div className="App"> 
// //      <form onSubmit={handleSubmit}> 
// //        <fieldset> 
// //          <h2>Sign Up</h2> 
// //          <div className="Field"> 
// //            <label> 
// //              First name <sup>*</sup> 
// //            </label> 
// //            <input 
// //              value={firstName} 
// //              onChange={(e) => { 
// //                setFirstName(e.target.value); 
// //              }} 
// //              placeholder="First name" 
// //            /> 
// //          </div> 
// //          <div className="Field"> 
// //            <label>Last name</label> 
// //            <input 
// //              value={lastName} 
// //              onChange={(e) => { 
// //                setLastName(e.target.value); 
// //              }} 
// //              placeholder="Last name" 
// //            /> 
// //          </div> 
// //          <div className="Field"> 
// //            <label> 
// //              Email address <sup>*</sup> 
// //            </label> 
// //            <input 
// //              value={email} 
// //              onChange={(e) => { 
// //                setEmail(e.target.value); 
// //              }} 
// //              placeholder="Email address" 
// //            /> 
// //          </div> 
// //          <div className="Field"> 
// //            <label> 
// //              Password <sup>*</sup> 
// //            </label> 
// //            <input 
// //              value={password.value} 
// //              type="password" 
// //              onChange={(e) => { 
// //                setPassword({ ...password, value: e.target.value }); 
// //              }} 
// //              onBlur={() => { 
// //                setPassword({ ...password, isTouched: true }); 
// //              }} 
// //              placeholder="Password" 
// //            /> 
// //            {password.isTouched && password.value.length < 8 ? ( 
// //              <PasswordErrorMessage /> 
// //            ) : null} 
// //          </div> 
// //          <div className="Field"> 
// //            <label> 
// //              Role <sup>*</sup> 
// //            </label> 
// //            <select value={role} onChange={(e) => setRole(e.target.value)}> 
// //              <option value="role">Role</option> 
// //              <option value="individual">Individual</option> 
// //              <option value="business">Business</option> 
// //            </select> 
// //          </div> 
// //          <button type="submit" disabled={!getIsFormValid()}> 
// //            Create account 
// //          </button> 
// //        </fieldset> 
// //      </form> 
// //    </div> 
// //  ); 
// // } 

// // export default App; 

// import "./App.css";
// import { ThemeProvider, useTheme } from "./ThemeContext";
// import Switch from "./Switch";

// const Title = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <h2
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </h2>
//   );
// };

// const Paragraph = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <p
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </p>
//   );
// };

// const Content = () => {
//   return (
//     <div>
//       <Paragraph>
//         We are a pizza loving family. And for years, I searched and searched and
//         searched for the perfect pizza dough recipe. I tried dozens, or more.
//         And while some were good, none of them were that recipe that would
//         make me stop trying all of the others.
//       </Paragraph>
//     </div>
//   );
// };

// const Header = () => {
//   return (
//     <header>
//       <Title>Little Lemon 🍕</Title>
//       <Switch />
//     </header>
//   );
// };

// const Page = () => {
//   return (
//     <div className="Page">
//       <Title>When it comes to dough</Title>
//       <Content />
//     </div>
//   );
// };

// function App() {
//   const { theme } = useTheme();
//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor: theme === "light" ? "white" : "black",
//       }}
//     >
//       <Header />
//       <Page />
//     </div>
//   );
// }

// function Root() {
//   return (
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   );
// }

// export default Root;


// import { useState} from "react";

// export default function App() {
//     const [restaurantName, setRestaturantName] = useState("lemon");

//     function updateRestaurantName() {
//         setRestaturantName("little Lemon")
//     }
//     return (
//         <div>
//             <h1>{restaurantName}</h1>
//             <button onClick={updateRestaurantName}>Update Restaurant Name</button>
//         </div>
//     )
// }

//an example of a goal app

// import React from "react";


// function GoalForm(props){
//     const [formData, setFormData] = React.useState({goal:"", by:""});

//     function changeHandler(e){
//         setFormData({...formData, [e.target.name]: e.target.value})
//     }

//     function submitHandler(e){
//         e.preventDefault();
//         props.onAdd(formData);
//         setFormData({goal:"", by:""})
//     };
//     return(
//         <>
//         <h1>My Little Lemon goals</h1>
//         <form onSubmit={submitHandler}>
//             <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}/>
//             <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler}/>
//             <button>submit Goal</button>
//         </form>
//         </>
//     )
// }
// function ListOfGoals(props) {
//     return (
//         <ul>
//             {props.allGoals.map((g, index) => (
//                 <li key={index}>
//                     <span>My goal is to {g.goal}, by {g.by}</span>
//                 </li>
//             ))}
//         </ul>
//     );
// }
// export default function App(){
//     const [allGoals, updateallGoal] = React.useState([])

//     function addGoal(goal){updateallGoal([...allGoals, goal]);
//     }
//     return(
//         <div className="App">
//             <GoalForm onAdd = {addGoal}/>
//             <ListOfGoals allGoals = {allGoals}/>
//         </div>
//     )
// }


// import { useState } from "react";

// export default function App() {
//   const [giftCard, setGiftCard] = useState(
//     {
//         firstName: "Jennifer",
//         lastName: "Smith",
//         text: "Free dinner for 4 guests",
//         valid: true,
//         instructions: "To use your coupon, click the button below.",
//     }
//   );

//   function spendGiftCard() {
//     setGiftCard(prevState=>{
//       return{
//         ...prevState,
//         text:"Your coupon has been used",
//         valid: false,
//         instructions: "Please visit our restaurant to renew your gift card."
//       }
//     })
// }

//   return (
//     <div style={{padding: '40px'}}>
//       <h1>
//         Gift Card Page
//       </h1>
//       <h2>
//         Customer: {giftCard.firstName} {giftCard.lastName}
//       </h2>
//       <h3>
//         {giftCard.text}
//       </h3>
//       <p>
//         {giftCard.instructions}
//       </p>
//       {
//         giftCard.valid && (
//           <button onClick={spendGiftCard}>
//             Spend Gift Card
//           </button>
//         )
//       }
//     </div>
//   );
// }


//the use effect hook

// import React from "react";
// import "./App.css"

// function App(){
//   const [toggle, setToggle] = React.useState(false);

//   const clickHandler = ()=>{
//     setToggle(!toggle);
//   }

//   React.useEffect(()=>{
//     document.title = toggle ? "Welcome to Little Lemon" : "Using the side Effect hook"
//   },[toggle])
//   return(
//     <div>
//       <h1>Using the side Effect hook</h1>
//       <button onClick = {clickHandler}>
//         Toggle Message
//       </button>
//       {toggle && <h2>Welcome to little lemon</h2>}
//     </div>
//   )
// }

// export default App;

// import React from "react";

// function App() {
//   const [user, setUser] = React.useState([]);

//   const fetchData = () => {
//     fetch("https://randomuser.me/api/?results=1")
//       .then((response) => response.json())
//       .then(data => setUser(data));
//   };

//   React.useEffect(() => {
//     fetchData();
//   }, []);

//   return Object.keys(user).length > 0 ? (
//     <div style={{padding: "40px"}}>
//       <h1>Customer data</h1>
//       <h2>Name: {user.results[0].name.first}</h2>
//       <img src ={user.results[0].picture.large} alt=""/>
//     </div>
//   ) : (
//     <h1>Data pending...</h1>
//   );
// }

// export default App;


//the use reducer hook

// import {useReducer} from "react";
// import "./App.css";

// const reducer = (state, action) =>{
//   if(action.type=== 'buy ingredients') return {money: state.money -10};
//   if(action.type=== 'sell_a_meal') return {money: state.money +10};
//   if(action.type=== 'celebrity visit') return {money: state.money +500};
//   return state;
// }

// function App(){
//   const initialState = {money:100};
//   const[state, dispatch] = useReducer(reducer, initialState);

//   return(
//     <div className="App">
//       <h1>Wallet: {state.money}</h1>
//       <div>
//         <button onClick={() => dispatch({type:"buy ingredients"})}>Shopping for veggies</button>
//         <button onClick={() => dispatch({type:"sell_a_meal"})}>Serve a meal to a Customer</button>
//         <button onClick={() => dispatch({type:"celebrity visit"})}>Celebrity visit</button>
//       </div>
//     </div>
//   )
// }

// export default App;


//the useRef hook
// import React from "react";
// import "./App.css"

// function App(){
//   const formInputRef = React.useRef(null);

//   const focusInput = () =>{
//    formInputRef.current.focus(); 
//   }

//   return(
//     <>
//     <h1>Using the useRef to access the underlying Dom</h1>
//     <input ref={formInputRef} type="text"/>
//     <button onClick={focusInput}>
//       Focus Input
//     </button>
//     </>
//   )
// }

// export default App;


// import { useState, useEffect, useRef } from "react";
// export default function App() {
//   const [day, setDay] = useState("Monday");
//   const prevDay = usePrevious(day);
//   const getNextDay = () => {
//     if (day === "Monday") {
//       setDay("Tuesday")
//     } else if (day === "Tuesday") {
//       setDay("Wednesday")
//     } else if (day === "Wednesday") {
//       setDay("Thursday")
//     } else if (day === "Thursday") {
//       setDay("Friday")
//     } else if (day === "Friday") {
//       setDay("Monday")
//     }
//   }
//   return (
//     <div style={{padding: "40px"}}>
//       <h1>
//         Today is: {day}<br />
//         {
//           prevDay && (
//             <span>Previous work day was: {prevDay}</span>
//           )
//         }
//       </h1>
//       <button onClick={getNextDay}>
//         Get next day
//       </button>
//     </div>
//   );
// }
// function usePrevious(val) {
//   const ref = useRef();

//     useEffect(() => {
//     ref.current = val
//     }, [val]);
//   return ref.current;
// }


// //component composition

// import "./App.css";

// const Button = ({children, backgroundColor}) => {
//   return <button style = {{backgroundColor}}>{children}</button>
// }

// const Alert = ({children}) => {
//   return(
//     <>
//     <div className = "Overlay"/>
//     <div className = "Alert">{children}</div>
//     </>
//   );
// };

// const DeleteButton =()=> {
//   return<Button backgroundColor="red">Delete</Button>
// };

// function App() {
//   return(
//     <div className = "App">
//       <header>Little Lemon Restaurant</header>
//       <Alert>
//         <h4>Delete Account</h4>
//         <p>Are you sure you want to proceed? 
//           You will miss out on all your favourite recipes</p>
//           <DeleteButton/>
//       </Alert>
//     </div>
//   )
// }

// export default App;


//manipulating children dynamically 
//ll visualize orders for the cheffs

// import * as React from "react";
// import "./App.css";

// const Row = ({children, spacing}) =>{
//   const childStyle = {
//     marginLeft : `${spacing}px`
//   };

//   return(
//     <div className="Row">
//       {React.Children.map(children, (child,index) =>{
//         return React.cloneElement(child, {
//           style:{
//             ...child.props.style,
//             ...(index > 0 ? childStyle:{}),
//           },
//         });
//       })}
//     </div>
//   )
// }


// import "./App.css";
// import { RadioGroup, RadioOption } from "./Radio";
// import { useState } from "react";

// function App() {
//   const [selected, setSelected] = useState("");
//   return (
//     <div className="App">
//       <h2>How did you hear about Little Lemon?</h2>
//       <RadioGroup onChange={setSelected} selected={selected}> 
//         <RadioOption value="social_media">Social Media</RadioOption> 
//         <RadioOption value="friends">Friends</RadioOption> 
//         <RadioOption value="advertising">Advertising</RadioOption> 
//         <RadioOption value="other">Other</RadioOption>
//       </RadioGroup> 
//       <button disabled={!selected}>Submit</button>
//     </div>
//   );
// }

// export default App;


//login and sigh up button using the spread operator

// import './App.css';

// const Button = ({type, children, ...buttonProps}) =>{
//     const className = type === "primary"? "primaryButton" : "secondaryButton";
//     return(
//         <button className={`Button ${className}`}{...buttonProps}>
//             {children}
//         </button>
//     )
// }

// const LoginButton = ({type, children, ...buttonProps}) =>{
//     return(
//         <Button
//         type="secondary"
//         {...buttonProps}
//         onClick={()=>{
//             alert("Loggin in")
//         }}
//         >
//             {children}</Button>
//     )
// }

// function App(){
//     return(
//         <div className='App'>
//             <header className='Header'>Little Lemon restaurant</header>
//             <Button type="primary" onClick ={()=> alert("signing up!")}>
//                 Sign Up
//             </Button>
//             <LoginButton type="secondary" onClick={() => alert("signing Up!")}>
//                 Log in
//             </LoginButton>
//         </div>
//     )
// };

// export default App;

// import "./App.css";
// import { useEffect, useState } from "react";

// const MousePosition = ({ render }) => {
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });

//   useEffect(() => {
//     const handleMousePositionChange = (e) => {
//       setMousePosition({
//         x: e.clientX,
//         y: e.clientY,
//       })
//     };
//     window.addEventListener("mousemove", handleMousePositionChange);

//     return () => {
//       window.removeEventListener("mousemove", handleMousePositionChange);
//     };
//   }, []);

//   return render({mousePosition});
// };

// const PanelMouseLogger = () => {
//   return (
//     <div className="BasicTracker">
//       <p>Mouse position:</p>
//       <MousePosition
//         render={({ mousePosition }) => (
//           <div className="Row">
//             <span>x: {mousePosition.x}</span>
//             <span>y: {mousePosition.y}</span>
//           </div>
//         )}
//       />
//     </div>
//   );
// };

// const PointMouseLogger = () => {
//   <MousePosition
//       render={({ mousePosition }) => (
//         <p>
//           ({mousePosition.x}, {mousePosition.y})
//         </p>
//       )}
//     />
//   }
// function App() {
//   return (
//     <div className="App">
//       <header className="Header">Little Lemon Restaurant 🍕</header>
//       <PanelMouseLogger />
//       <PointMouseLogger />
//     </div>
//   );
// }

// export default App;


//writing tests

// import "./App.css";

// function App(){
//     return(
//         <div className = "App">
//             <a href="https://littlelemon.com" className="App-link">
//                 Little Lemon Restaurant
//             </a>
//         </div>
//     )
// }

// export default App;


// import "./App.css";
// import FeedbackForm from './FeedbackForm'; // Assuming FeedbackForm is defined in FeedbackForm.js


// function App(){
//     const handleSubmit =(formData) =>{
//         console.log("From is submitted")
//     }
//     return (
//         <div className="App">
//             <FeedbackForm onSubmit = {handleSubmit}/>
//         </div>
//     )
// };

// export default App;
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
