import react from 'react'
import { Avatar, Grid,Box } from '@mui/material' ;
import Rating from '@mui/material/Rating';

const ProductReviewCard=()=>{
    return (
        <div>
        <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56 , height:56 , bgcolor:"#9155fd"}}>R</Avatar>
            </Box>
        </Grid>
        <Grid item xs={9}>
            <div className='space-y-2'>
                <div>
                    <p className='font-semibold text-lg text-gray-700'> Raam  </p>
                    <p className='opactiy-50'> April 5 , 2023</p>
                </div>
            </div>
        <Rating value={4.5} name="half-rating" readOnly precision={0.5}/>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit iusto perferendis quae, voluptates, doloribus facere unde iste alias molestias dolore harum culpa fugiat quidem.
       </p>
      
        </Grid>
        </Grid> 
        </div>
    )
}

export default ProductReviewCard