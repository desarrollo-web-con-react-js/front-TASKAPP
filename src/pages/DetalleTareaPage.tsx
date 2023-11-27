import DetalleTarea from "../components/DetalleTarea/DetalleTarea"

const DetalleTareaPage = ({ isLoggedIn }: { isLoggedIn: boolean }) => {

  return (
    <DetalleTarea isLoggedIn={isLoggedIn}/>
  )
}

export default DetalleTareaPage