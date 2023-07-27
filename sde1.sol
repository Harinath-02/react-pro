// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract me {
    uint256 public count = 1000;
    address admin = 0x46fb09deaF60877710a1c6d35Fa6F59dBcfB8CBF;
    modifier onlyadmin() {
        require(msg.sender == admin);
        _;
    }
    address labeller = 0x282Bc466b3De1fC3fF83F81d0C4E7CC986fdA6B4;
    modifier onlylabeller() {
        require(msg.sender == labeller);
        _;
    }
    address developer = 0x8b07014CDeb74743C5C4B1783E161EB03914a377;
    modifier onlydeveloper() {
        require(msg.sender == developer);
        _;
    }
    address verifier = 0x5d9ddA45E58156F626098dF7E9B5c4C960391f65;
    modifier onlyverifier() {
        require(msg.sender == verifier);
        _;
    }
    mapping(uint256 => patchinfo) a;
    mapping(uint256 => patchr) ac;
    uint256[] public verified;
    uint256[] public downloaded;
    uint256[] public pid;
    uint256 hashDigits = 8;
    uint256 hashModulus = 10**hashDigits;
    enum status {
        inprogress,
        verified
    }
    struct patchr {
        uint256 rid;
        string name;
        string[] ar1;
        string[] ar2;
        uint256 rstat;
        string vstat;
        string reason;
    }
    struct patchinfo {
        uint256 patchid;
        string patchfilename;
        string patchlink;
        string patchversion;
        string patchplatform;
        string[] features;
        uint256 timestamp;
        string verstat;
        string depstat;
        uint256 rrid;
        uint256 patchver;
    }
    mapping(uint256 => uint256[]) userpatch;
    uint256 public count1 = 0;
    mapping(string => bugreport[]) b;
    string[] public bid;
    uint256 hashDigits2 = 8;
    uint256 hashModulus2 = 10**hashDigits2;
    struct bugreport {
        string appname;
        string version;
        string description;
        string fts;
        uint256 prior;
        uint256 breqstatus;
        uint256 freq;
    }
    string[] public devds;
    string[] public devft;
    function addpatch(
        uint256 rid2,
        string memory name,
        string memory ln,
        string memory ver,
        string memory plat,
        string[] memory ft
    ) public onlydeveloper {
        // count=count+10;
        uint256 t = block.timestamp;
        string memory res = string.concat(name, ver);
        count=count+1;
        a[count] = patchinfo(
            count,
            res,
            ln,
            ver,
            plat,
            ft,
            t,
            "Inprogress",
            "not deployed",
            rid2,
            0
        );
        pid.push(count);
        ac[rid2].rstat=1;
        // s.push(emp(id,name,sal));
    }
    function reupload(uint _id1,string memory ptch) public{
        uint256 r;
        for(uint256 i=0;i<pid.length;i++){
            if(_id1==a[pid[i]].rrid){
                r=pid[i];
            }
        }
        ac[_id1].rstat=1;
        a[r].patchlink=ptch;
        a[r].patchver+=1;
        a[r].verstat="Inprogress";
    }

    function download(uint256 patid) public {
        downloaded.push(patid);
    }

    function getArray() public view returns (uint256[] memory) {
        return downloaded;
    }

    // function getuids(uint256 pidd) public view returns (uint256[] memory) {
    //     return a[pidd].userids;
    // }

    function patchidarr() public view returns (uint256[] memory) {
        return pid;
    }

    function get(uint256 id)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string[] memory
        )
    {
        return (
            a[id].patchfilename,
            a[id].patchlink,
            a[id].patchversion,
            a[id].patchplatform,
            a[id].features
        );
    }

    function vadd(uint256 _id) public onlyverifier {
        verified.push(_id);
        a[_id].verstat = "verified";
         ac[a[_id].rrid].vstat="uploaded";
    }

    // function deployed2() public view returns(uint[] memory){
    //     return deployed;
    // }
    function rvadd(uint256 _id,string memory rsn) public onlyverifier {
        a[_id].verstat="Reupload";
        ac[a[_id].rrid].rstat=0;
        ac[a[_id].rrid].reason=rsn;
        ac[a[_id].rrid].vstat= "reupload";
    }

    function dadd(uint256 _id) public onlyadmin {
        // deployed.push(_id);
        a[_id].depstat = "deployed";
    }

    function vpatchidarr() public view returns (uint256[] memory) {
        return verified;
    }

    function getpatches() public view returns (patchinfo[] memory) {
        patchinfo[] memory id = new patchinfo[](count);
        for (uint256 i = 0; i < pid.length; i++) {
            patchinfo storage member = a[pid[i]];
            id[i] = member;
        }
        return id;
    }

    bytes public file;

    // function settxt(bytes memory _file) public{
    //     file=_file;
    // }
    // function gettxt(bytes memory _f) public returns (bytes memory) {
    //     // string memory tc= string(f);
    //     return _f;
    // }

    // bugreport[] public bugs;
    string[] public plist;
    string[] public dlist;

    // function bhashid(string memory name,string memory ln,string memory ver,string memory plat) public returns(uint){
    //     uint random2 = uint(keccak256(abi.encodePacked(name,ln,ver,plat)));
    //     return random2 % hashModulus2;
    // }
    function addbug(
        string memory name,
        string memory vers,
        string memory des,
        string memory ft
    ) public {
        count1++;
        // uint pd2=bhashid(name,vers,des,ft);
        // b[name]=bugreport(name,vers,des,ft,0));
        bugreport memory nbug = bugreport(name, vers, des, ft, 0, 0, 0);
        b[name].push(nbug);
        bid.push(name);
        // bugs.push(bugreport(name,vers,des,ft));
    }

    function gbug(string memory _id) public view returns (bugreport[] memory) {
        return b[_id];
    }

    // function getbugs() public returns(bugreport[] memory){
    //     bugreport[] memory id = new bugreport[](bid.length);
    //     for (uint i = 0; i < bid.length; i++) {
    //         bugreport storage member = b[bid[i]];
    //         id[i] = member;
    //     }
    //     return id;
    // }
    function gprior(
        string memory name,
        string[] memory bugdes,
        uint256[] memory bprior
    ) public onlylabeller {
        // bugreport[] memory nbug=b[name];
        for (uint256 j = 0; j < bprior.length; j++) {
            for (uint256 i = 0; i < b[name].length; i++) {
                if (
                    (keccak256(abi.encodePacked(b[name][i].description)) ==
                        keccak256(abi.encodePacked(bugdes[j]))) && b[name][i].prior==0
                ) {
                    b[name][i].prior = bprior[j];
                    break;
                }
            }
        }
    }

    uint256 public rcount = 0;
    function gbf(
    string memory name,
    string[] memory ds,
    string[] memory ftt
) public onlyadmin {
    for (uint256 i = 0; i < ds.length; i++) {
        for (uint256 j = 0; j < b[name].length; j++) {
            if (
                (keccak256(abi.encodePacked(b[name][j].description)) ==
                    keccak256(abi.encodePacked(ds[i]))) && b[name][j].breqstatus == 0
            ) {
                b[name][j].breqstatus = 1;
                break;
            }
        }
        devds.push(ds[i]);
    }
    for (uint256 i = 0; i < ftt.length; i++) {
        for (uint256 j = 0; j < b[name].length; j++) {
            if (
                (keccak256(abi.encodePacked(b[name][j].fts)) ==
                    keccak256(abi.encodePacked(ftt[i]))) && b[name][j].freq == 0
            ) {
                b[name][j].freq = 1;
                break;
            }
        }
        devft.push(ftt[i]);
    }
    rcount = rcount + 1;
    ac[rcount] = patchr(rcount, name, ds, ftt, 0, "upload", "null");
}


    // function gbf(
    //     string memory name,
    //     string[] memory ds,
    //     string[] memory ftt
    // ) public onlyadmin {
    //     for (uint256 i = 0; i < ds.length; i++) {
    //         for (uint256 j = 0; j < b[name].length; j++) {
    //             if (
    //                 (keccak256(abi.encodePacked(b[name][j].description)) ==
    //                     keccak256(abi.encodePacked(ds[i]))) && b[name][i].breqstatus==0
    //             ) {
    //                 b[name][j].breqstatus = 1;
    //                 break;
    //             }
    //         }
    //         devds.push(ds[i]);
    //     }
    //     for (uint256 i = 0; i < ftt.length; i++) {
    //         for (uint256 j = 0; j < b[name].length; j++) {
    //             if (
    //                 (keccak256(abi.encodePacked(b[name][j].fts)) ==
    //                     keccak256(abi.encodePacked(ftt[i]))) && b[name][i].freq==0
    //             ) {
    //                 b[name][j].freq = 1;
    //                 break;
    //             }
    //         }
    //         devft.push(ftt[i]);
    //     }
    //     rcount = rcount + 1;
    //     ac[rcount] = patchr(rcount,name, ds, ftt,0,"upload","null");
    //     // redflower[no]
    // }

    function reqcount() public view returns (uint256) {
        return rcount;
    }

    function getarr(uint256 num)
        public
        view
        returns (
            uint256,
            string memory,
            string[] memory,
            string[] memory,
            uint256,
            string memory,
            string memory
        )
    {
        return (ac[num].rid,ac[num].name, ac[num].ar1, ac[num].ar2,ac[num].rstat,ac[num].vstat,ac[num].reason);
    }
    // function bprior(string[] memory ds,string[] memory lt) public{
    //     dlist=ds;
    //     plist=lt;
    // }
    // function gprior() public returns(string[] memory,string[] memory){
    //     return (dlist,plist);
    // }
}