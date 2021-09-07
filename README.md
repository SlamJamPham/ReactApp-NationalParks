# ReactApp-NationalParks

This app allows you to pick a US state and view the corresponding national park information in a visual format.

## General Information

UI/Styling: https://chakra-ui.com/

National Parks API: https://www.nps.gov/subjects/developer/api-documentation.htm

API Layer: ./src/services/infoAPI.jsx

Testing: ./src/__tests__

NOTE: React-USA-Map uses a older version of react so I used "npm install --force" to force install it, the functionality still works. I'm not sure if that is best pratice or if that may cause issue but it is a simple library to have a clickable US map.

## Component Layout

* Home
  * React-USA-Map (External Library)
  * SearchLogo 
* Results
  * ListView/CarouselView 
    * ResultCard
    * ParkCard
  * ReportCard   
    * Formik (External Library)  
* Slick-Carousel (External Library)
  * SliderArrows  


