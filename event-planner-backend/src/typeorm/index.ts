/* eslint-disable prettier/prettier */
import { Event } from './event.entity';
import { User } from './user.entity'
import { SessionEntity } from './session.entity'; 
import { Speaker } from './speaker.entity';
import { Sponsor } from './sponsor.entity';
import { Admin } from './admin.entity'

const entities = [Event, User , SessionEntity, Speaker, Sponsor, Admin];

export { Event, User, SessionEntity, Speaker, Sponsor, Admin };
export default entities;