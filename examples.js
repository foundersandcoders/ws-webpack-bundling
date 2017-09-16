// default_export.js
export default 'export value';

// index.js
import val from './default_export.js'; // val === 'export value'

// multi_export.js
export default 'export value';

// index.js
import val from './default_export.js'; // val === 'export value'

