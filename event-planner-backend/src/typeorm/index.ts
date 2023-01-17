/* eslint-disable prettier/prettier */
import { Event } from './event.entity';
import { User } from './user.entity'
import { Schedule } from './schedule.entity';
import { SessionEntity } from './session.entity'; 
import { Speaker } from './speaker.entity';
import { Sponsor } from './sponsor.entity';
import { Admin } from './admin.entity'

const entities = [Event, User, Schedule, SessionEntity, Speaker, Sponsor, Admin];

export { Event, User, Schedule, SessionEntity, Speaker, Sponsor, Admin };
export default entities;