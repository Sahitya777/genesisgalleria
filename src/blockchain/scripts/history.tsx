import { Account, Contract, RpcProvider, num } from 'starknet';
import gensisAbi from '../abis/genesis.json';
export async function getAllGenesis(){
    const provider=new RpcProvider({nodeUrl:'https://starknet-sepolia.public.blastapi.io/rpc/v0_6'})
    const genesisContractAddress='0x009912656801bb07632337c939a30a98863672bb9d9edba0836197c2ee1957b1'
    const genesisContract=new Contract(
        gensisAbi,
        genesisContractAddress,
        provider
    )
    const allGenesis=await genesisContract.call('get_all_genesis')
    return allGenesis;

}


function splitString(str:String) {
    // Calculate the middle index
    const middleIndex = Math.ceil(str.length / 2);

    // Split the string into two parts
    const part1 = str.substring(0, middleIndex);
    const part2 = str.substring(middleIndex);

    return [part1, part2];
}

export async function getGenesis(){
    const provider=new RpcProvider({nodeUrl:'https://starknet-sepolia.public.blastapi.io/rpc/v0_6'})
    const genesisContractAddress='0x009912656801bb07632337c939a30a98863672bb9d9edba0836197c2ee1957b1'
    const genesisContract=new Contract(
        gensisAbi,
        genesisContractAddress,
        provider
    )
    const uri=splitString('QmdzrLZvDRqnuTRo6PsvioMk8eN7W68NMdmKuVzsRRJDuz')
    const account0 = new Account(provider, '0x057915a0e5144949d3e879379dcf6d0410a108656bd677a441a30a3a8d36d350','1');
    genesisContract.connect(account0);
    const allGenesis=genesisContract.populate('publish_genesis',[uri[0],uri[1]])
    const res = await genesisContract.publish_genesis(allGenesis.calldata);
    return res;

}