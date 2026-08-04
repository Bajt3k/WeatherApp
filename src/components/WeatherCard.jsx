function WetherCard({ weather }) {
  return (
    <div className="">
        if (!weather) {
        <p>Loading...</p>
      }else {  
      <h2 className="">{weather}</h2>
      }
    </div>
  )
}export default WetherCard