import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const properties = [
  {
    title: 'Bordeaux Getaway',
    image: 'https://s3-alpha-sig.figma.com/img/33e7/8912/bbfb42ca5051f5492bcbda4a216dccc6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PFF62WOwsIHqviChCXSdT62KWnoexOHuMkGZpzRKJ4TNDDXuNJySwoT3N~RXG3DDxZoRZEfBsnhroT4xNXIYiv43Fe30DtihkED5qRe7LQzf2jnqO68dScr~im7ksxFPaDEBw~mR0sE854dvMx-lWLYK~oeHAQLpwmjfYZxf2EdczbNtRESR8O~47a9OyUo95LKGYrwoODLyzjC1n02FSUhz-tHKPGbVlAj3bKMSj5QMf74nJPXUepVwOZDYNE-EZdl4n1LrhaATtvvIwG4wWjjZVtLeT1d9~gB8E8Xwzk4MFGhrWSgvUAvBY2DjvZDTJn4ZGeAqnOKap1pafEVR-A__', 
    description: 'Entire home in Bordeaux • 4-6 guests • 5 beds • 3 bath',
    price: '$325/night',
    rating: 5.0,
    reviews: 318,
  },
  {
    title: 'Charming Waterfront Condo',
    image: 'https://s3-alpha-sig.figma.com/img/d04e/1510/4bb9a1003945dedcc1bdd5d42f9efd3c?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gzUIED8GZwfQx1-TGUs0gfL2BgDfVsxWXsiwoQ45C~wjqL1jovw1gBvbsQxHlMJycWOdcN17V38BX~~XuoX-Gpl~l0LyeTOswUiv53CEDiYHqaHguP5vuIqixV1XyUsUNxa1EtTNpC~xSzW5Cax27rHnSRXmpZFED5L~q3zPa2ADqnw2xE8gmSy0RfwRiGX0~dZI9UscghJ1TVOwzpqlHsMOvyTHJGyq086OX~BamyHZ0CkYdI8KXwROUgMfgXYheZWHSVsSGv3qeRjmYfH8J0PvIQfCHA5qTpN8gw-ua10Zk1qMJh~E3hpAOh-~h~kz7ZuJ0pzs9RsUtcEG1BtzyQ__',
    description: 'Entire home in Bordeaux • 4-6 guests • 5 beds • 3 bath',
    price: '$200/night',
    rating: 5.0,
    reviews: 318,
  },
  {
    title: 'Historic City Center Home',
    image: 'https://s3-alpha-sig.figma.com/img/6aa5/53ec/51450ca27a09814543994caa21edf484?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W3Lek9ArGsRlWPkunB47Vl909GXHBUg4b8RonWs3YaO~wxwk69doGVYnoJG1C024bGSgpKHEEEYRfyL~MPX9Ao1bvNymuPCi99204C3jctV7TzeEJQgQYjmdS~0vTHcVv7BeuD9dTxfA1oqPSxMyHSaxSM7nGEFpZVwy8ROTufarYAAHLGDTraL3oEP5mtN074oAyX9oEljKsKSVEVEDWtQuHNoMWRggoTAPyjFtiq-WJ3CD37irF171TUln2AWBYTUOzLqOSjGKMfQyPXsINW8H~Mx3BQsKobW7j89e5X6Uls6nNcZ731HC50A~wnCSewbcLO-YQVZYmLdJRbG5mQ__', 
    description: 'Entire home in Bordeaux • 4-6 guests • 5 beds • 3 bath',
    price: '$200/night',
    rating: 5.0,
    reviews: 318,
  },
];

const PropertyList = () => {
  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h6">200+ stays in Bordeaux</Typography>
      <Grid container spacing={2}>
        {properties.map((property, index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ display: 'flex', borderRadius: '12px', border: 1, borderColor: 'grey.300' }}>
              <CardMedia
                component="img"
                sx={{ width: 300, height: 200, borderRadius: '12px 0 0 0' }}
                image={property.image}
                alt={property.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent sx={{ padding: '16px', gap: '16px' }}>
                  <Typography variant="h5" component="div">
                    <Link to={`/Listing/${encodeURIComponent(property.title)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      {property.title}
                    </Link>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {property.description}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {property.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {property.rating} ★ ({property.reviews} reviews)
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PropertyList;
