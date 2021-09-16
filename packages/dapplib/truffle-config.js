require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remember pudding include knee success gather'; 
let testAccounts = [
"0xa20fdb5294356d8b391570c6ef16800a81f62ef0f0fbbad72f68eef72ca26295",
"0x83faff31c0f45d5b670cbc4451bc3767bbcf4bfa3fca93cde4a3b4f662a280d8",
"0xd0f977041901b9f439b18e3898f892e484049f734866d8e962897b6d639c87fe",
"0xe9e42b07e99d7f46775d5a8db1df89d5940fbee92e945346d78f70a721cdea47",
"0xf8c8b0b28819a71f76c35157010bf52afaa59abefa56b568805aecc5e4b9432b",
"0xe1d22d297afeab5ce905f9b1434e87fd9de361702dc5327189875a942107c32c",
"0x3d1498ed13ef51a1a649b0b8e40a6e9c4832e6cd05bda372d11aa8f037a96633",
"0x44ced5dc42bc5cf8dcc559347659f5ef9a5c4203e4cf2d3dbe7088c263e3e34f",
"0xa7a77df41f0763b160cc73cc56b36d5329e0ce59141aa26666d81a74b09e9c06",
"0x0a1026f8390321bcbfc2aab305ef09e01efe143cc4bcb578185133b56e2cf86d"
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

