import './MyWorks.css';
import React from 'react';
import axios from 'axios';
import ImageList from './ImageList';

class MyWorks extends React.Component {
    
    state = { images: [], field: 'car' };
    
     onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID KJkfFibcYyMAZsKeyrvQoDyk-VMHsSn6-9KQmvYJJmQ'
            },
        });
        this.setState({images: response.data.results});
        console.log(response.data.results)
    };
    
    render(){
        return(
            <>
                <div style={{display:'flex', flexDirection:'column', width:'70%', margin: '0 auto', padding:'20px'}}>
                    <h2 style={{ top:'40px',
                    left:'40%',
                    fontSize: '82px',
                    lineHeight: '1.17',
                    margin: '-35px 0 0 -35px',
                    textAlign:'center'}}>My Works!</h2>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop:'30px'}}>
                        <button onClick={() => this.onSearchSubmit('nature')}>Nature</button>
                        <button onClick={() => this.onSearchSubmit("people")}>People</button>
                        <button onClick={() => this.onSearchSubmit("family")}>Family</button>
                        <button onClick={() => this.onSearchSubmit("Birhday")}>Birhday</button>
                        <button onClick={() => this.onSearchSubmit("Wedding")}>Wedding</button>
                        <button onClick={() => this.onSearchSubmit("Building")}>Building</button>
                    </div>
                    <div  style={{ marginTop: '30px',  width:'1400px' }}>
                        
                        <ImageList images={this.state.images} />
                    </div>
                </div>
            </>
            
        );
    }
}
export default MyWorks;
