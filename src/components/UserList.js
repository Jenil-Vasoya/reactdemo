import React, { Component } from 'react'
import axios from 'axios'

 class UserList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts : []
      }
    }
    
    componentDidMount()
    {
        axios.get('https://localhost:7010/Mission/Missions').then(response => {
            console.log(response)
            this.setState({posts : response.data})
        }).catch(error =>{
            console.log(error)
        })
    }

  render() {
    const {posts} = this.state
    return (
      <div>
        {
            
            posts.map(post => <div key={post.missionId}>{post.title}</div>) 
            
        }
      </div>
    )
  }
}

export default UserList
