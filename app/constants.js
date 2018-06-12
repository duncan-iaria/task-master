const APP_NAME = 'testApp';

const TYPE_BUG = 'Bug';
const TYPE_NORMAL = 'Normal';
const TASK_TYPES = [
  {
    id: 0,
    name: TYPE_NORMAL,
  },
  {
    id: 1,
    name: TYPE_BUG,
  },
];

export { APP_NAME, TYPE_BUG, TYPE_NORMAL, TASK_TYPES };

const testTaskData = [
  {
    id: 1,
    type: {
      id: 1,
      name: TYPE_BUG,
    },
    name: 'Test Bug Item',
    desc: 'This is a serious issue',
    dateOfBirth: Date.now(),
  },
  {
    id: 2,
    type: {
      id: 0,
      name: TYPE_NORMAL,
    },
    name: 'Test Normal Item',
    desc: 'This is a normal task issue',
    dateOfBirth: Date.now(),
  },
  {
    id: 3,
    type: {
      id: 1,
      name: TYPE_BUG,
    },
    name: 'Test Bug Item',
    desc: 'This is a VERY serious issue',
    dateOfBirth: Date.now(),
  },
];
