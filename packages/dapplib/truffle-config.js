require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy release night hospital include praise army giant'; 
let testAccounts = [
"0xf572b11ddd7caad7110afe0a83cb6b4577d41a44b1cbb3a2abc5c92601475515",
"0xbd81e9c5990ce93417013f9eb34dd0ec49053db956bf51e0537c84372f5c841f",
"0x7df5b6653522b88d7ced3e0002fe34326934b7b8f3afe5d0afde8b378e32a8ee",
"0x60e62a3acae8aa6dfbd6bac39c355f7c58d16fa51397dc5104a328a2ba69f3e3",
"0x32b0803558c07b17811aa11b7145991af76654d444f752f94bd61e905df21879",
"0x797d1c4c9672b82d784a23ca8b5bf611453105f3699470224ef2cbff658f6e51",
"0xa424b940a677d7c93b68bbafc2b6907527754e5e83044f3d8020c16a65deb0d7",
"0x447038d5212b3f5a102da8f689bb0417e0fa06c54dc8ea8412e8b913e4560f9f",
"0x383f51496212bfc96f8af64bc3ddf5d2095a7dca804aedaf3e8b9821f92cdd9f",
"0x5dd6c66016d7ff55adeb9fb1847ced635440790848e78abeb0dcfdbd5508c526"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

