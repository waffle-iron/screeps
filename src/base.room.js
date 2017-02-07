const ROOM_LEVELS = {
// energyCapacityAvailable: room level
   300: 1,
   550: 2,
   800: 3,
  1300: 4,
  1800: 5,
  2300: 6,
  2800: 7,
  3300: 8
}

class BaseRoom extends Room {
  constructor( room ) {
    super( room.id );
    this.init();
  }

  init() {
    this.memory = Memory.rooms[ this.name ];

    // Level of this room, ignoring RCL. Have a certain RCL level doesn't mean the capacity is increased immediately.
    // TODO: only check this when there's a chance the room was upgraded. Time will increase with every upgrade.
    // TODO: if controller is downgraded, need to recheck level immediately.
    for (let amountNeeded in ROOM_LEVELS) {
      if ( this.energyCapacityAvailable >= amountNeeded ) {
        this.memory.level = ROOM_LEVELS[amountNeeded];
        break;
      }
    }
    // switch ( true ) {
    // case ( this.energyCapacityAvailable >= 3300 ): // RCL 8
    //   this.memory.level = 8;
    //   break;
    // case ( this.energyCapacityAvailable >= 2800 ): // RCL 7
    //   this.memory.level = 7;
    //   break;
    // case ( this.energyCapacityAvailable >= 2300 ): // RCL 6
    //   this.memory.level = 6;
    //   break;
    // case ( this.energyCapacityAvailable >= 1800 ): // RCL 5
    //   this.memory.level = 5;
    //   break;
    // case ( this.energyCapacityAvailable >= 1300 ): // RCL 4
    //   this.memory.level = 4;
    //   break;
    // case ( this.energyCapacityAvailable >= 800 ): // RCL 3
    //   this.memory.level = 3;
    //   break;
    // case ( this.energyCapacityAvailable >= 550 ): // RCL 2
    //   this.memory.level = 2;
    //   break;
    // case ( this.energyCapacityAvailable >= 300 ): // RCL 1
    //   this.memory.level = 1;
    //   break;
    // default: // RCL 0
    //   this.memory.level = 0;
    // }
  }
}
