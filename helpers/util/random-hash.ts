import {createHash} from 'crypto'; 

export default (length=8) => 
  createHash('sha1').update(Math.random().toString())
    .digest('hex')
    .slice(0,length);