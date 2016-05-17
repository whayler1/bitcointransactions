'use strict';

import mongoose from 'mongoose';

var TransactionSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Transaction', TransactionSchema);
