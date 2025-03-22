import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={1}
    width={250}
    height={300}
    viewBox="0 0 250 310"
    backgroundColor="#828282"
    foregroundColor="#ffffff"
    
  >
    <rect x="0" y="12" rx="10" ry="10" width="250" height="300" />
  </ContentLoader>
)

export default MyLoader