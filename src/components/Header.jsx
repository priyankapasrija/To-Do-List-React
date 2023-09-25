/* function Header() {
  return (
    <>
      <h1
        style={{
          backgroundColor: "#AC8686",
          height: "3rem",
          textAlign: "center",
          fontSize: "1.3rem",
        }}
      >
        📝 To-Do List
      </h1>
    </>
  );
}

export default Header; */




function Header () {
  return (
      <h1 className="text-4xl p-4 bg-rose-950 font-extrabold text-green-400 text-center">
📝 ToDo<span className="text-rose-400"> List: </span> Coding <span className="text-rose-400"> Atom Ants!!</span> 
</h1>
  )
}

export default Header;


