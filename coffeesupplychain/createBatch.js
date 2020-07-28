'use strict';

// const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

const names = ['Reliance', 'Pepperridge', 'Fort Droi', 'Haglos', 'North Thampmare'];
const addresses = ['Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Karnataka', 'Telangana'];
const exporterNames = ['Godfrey Industries', 'Clifford Unlimited', 'Export Export Export'];
const importerNames = ['Trescothik Industries', 'Blast Unlimited', 'Pigeon and Co'];

// class CreateBatchWorkload extends WorkloadModuleBase {
//     constructor() {
//         super();
//         this.txIndex = 0;
//     }

// 	/**
// 	 * Assemble TXs for the round.
// 	 * @return {Promise<TxStatus[]>}
// 	 */
//     async submitTransaction() {
//         this.txIndex++;
//         let args = {
//             chaincodeFunction: 'createBatch',
//             chaincodeArguments: {
//                 'farmer-name': names[Math.floor(Math.random() * names.length)],
//                 'farm-address': addresses[Math.floor(Math.random() * addresses.length)],
//                 'exporter-name': exporterNames[Math.floor(Math.random() * exporterNames.length)],
//                 'importer-name': importerNames[Math.floor(Math.random() * importerNames.length)]
//             }
//         }
//         this.sutAdapter.invokeSmartContract('supplycc', '0', args, 30);
//     }

// }

// /**
//   * Create a new instance of the workload module.
//   * @return {WorkloadModuleInterface}
//   */
// function createWorkloadModule() {
//     return new CreateBatchWorkload();
// }

// module.exports.createWorkloadModule = createWorkloadModule;
const logger = require('@hyperledger/caliper-core').CaliperUtils.getLogger('coffee-supply-chain');
let bc, contx;

/**
* Initializes the workload module before the start of the round.
* @param {BlockchainInterface} blockchain The SUT adapter instance.
* @param {object} context The SUT-specific context for the round.
* @param {object} args The user-provided arguments for the workload module.
*/
module.exports.init = async (blockchain, context, args) => {
    bc = blockchain;
    contx = context;
    logger.debug('Initialized workload module');
};

module.exports.run = async () => {
    let txArgs = {
        chaincodeFunction: 'createBatch',
        // chaincodeArguments: []
        chaincodeArguments: [
            JSON.stringify({
                'farmer-name': names[Math.floor(Math.random() * names.length)],
                'farm-address': addresses[Math.floor(Math.random() * addresses.length)],
                'exporter-name': exporterNames[Math.floor(Math.random() * exporterNames.length)],
                'importer-name': importerNames[Math.floor(Math.random() * importerNames.length)]
            })
        ]
    };

    return bc.invokeSmartContract(contx, 'supplycc', '0', txArgs, 30);
};

module.exports.end = async () => {
    logger.debug('Disposed of workload module');
};