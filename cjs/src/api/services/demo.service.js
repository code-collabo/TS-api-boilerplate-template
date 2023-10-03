const Demo = require('../models/demo.model');

/* eslint-disable no-extra-semi */ // Note: only cjs api template needs this particular eslint comment

function getDemoItemsService () {
  const query = Demo.find().select('_id name age').exec();
  return query;
};

function createDemoItemService (req) {
  const demo = new Demo({
    name: req.body.name,
    age: req.body.age,
  });
  return demo.save();
};

function getOneDemoItemService (paramsId) {
  const query = Demo.findById(paramsId).select('_id name age').exec();
  return query;
};

function deleteDemoItemService (paramsId) {
  const query = Demo.deleteOne({ _id: paramsId }).exec();
  return query;
};

async function updateOneDemoItemPropertyValueService (paramsId, requestBody) {
  const queryDoc = await Demo.findById(paramsId).select('_id name age').exec();

  for (const ops of requestBody) {
    queryDoc[ops.propName] = ops.value;
  }

  const save = await queryDoc.save();
  return save;
};

function updateDemoItemPropertyValuesService (paramsId, requestBody) {
  const resetItem = {
    name: requestBody.name,
    age: requestBody.age,
  };
  const query = Demo.findByIdAndUpdate(paramsId, { $set: resetItem }, { new: true }).exec();
  return query;
};

module.exports = {
  getDemoItemsService,
  createDemoItemService,
  getOneDemoItemService,
  deleteDemoItemService,
  updateOneDemoItemPropertyValueService,
  updateDemoItemPropertyValuesService,
};
