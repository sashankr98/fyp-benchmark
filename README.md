Caliper benchmarks to measure performance of the supplychain fabric network

# Steps to run benchmarks
* Install all Hyperledger caliper prerequisites as mentioned in the [documentation](https://hyperledger.github.io/caliper/v0.3.2/installing-caliper/).
* Run ```npm install``` in the root benchmarks folder.
* Bind caliper to your version of fabric.
```bash
npx caliper bind --caliper-bind-sut fabric:1.4.7
```
* Set up the existing network and copy ```crypto-config/``` into  ```coffeesupplychain/```.
* Modify paths for various keys and certs in ```coffeesupplychain/networkConfig.yaml``` to match the generated crypto materials.
* Run the following commands:
```bash
cd coffeesupplychain #Working directory must be the coffeesupplychain folder

npx caliper launch master \
--caliper-workspace . \
--caliper-benchconfig benchmarkConfig.yaml \
--caliper-networkconfig networkConfig.yaml
```
