import Link from "next/link";
import { HiOutlineInboxIn } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai"
import { MdOutlineElectricBolt, MdOutlineManageAccounts } from "react-icons/md";
import Image from "next/image";

const Navbar = () => {
    return (
        <div >



            <div className="top bg-[#081621] flex justify-center items-center">
                <div className="container mx-auto flex items-center">

                    <Link href={"/"} className="mx-4 py-5">
                        {/* <img className="w-[117px] " src="https://www.startech.com.bd/image/catalog/logo.png" alt="" srcSet="" /> */}
                        <Image
                            src="https://www.startech.com.bd/image/catalog/logo.png"
                            width={117}
                            height={92}
                            alt=""
                        />
                    </Link>

                    <div className=" h-[42px] flex-1 rounded-sm ml-5 relative">
                        <input className=" w-full rounded-sm h-full p-[15px] outline-none" placeholder="Search" type="text" />

                        <AiOutlineSearch className="absolute right-0 top-2 cursor-pointer  text-[black] mr-4 text-2xl" />

                    </div>

                    <div className="flex   mx-[50px]">
                        <div className="mx-5 flex items-center" >
                            <HiOutlineInboxIn className="text-[#ef4a23] mr-4 text-2xl" />
                            <div>
                                <h3 className="text-[#fff] text-xm">Offers</h3>
                                <p className="text-[#acabab] text-sm">Latest Offers</p>
                            </div>
                        </div>
                        <div className="mx-5 flex items-center" >
                            <MdOutlineElectricBolt className="text-[#ef4a23] mr-4 text-2xl" />
                            <div>
                                <h3 className="text-[#fff] text-xm">Desktop Deal</h3>
                                <p className="text-[#acabab] text-sm">Special Deals</p>
                            </div>
                        </div>
                        <div className="mx-5 flex items-center" >
                            <MdOutlineManageAccounts className="text-[#ef4a23] mr-4 text-2xl" />
                            <div>
                                <h3 className="text-[#fff] text-xm">Account</h3>
                                <p className="text-[#acabab] text-sm">
                                    <Link href={"/login"} className="py-1 cursor-pointer hover:text-[#ef4a23]">Register </Link>
                                    or
                                    <Link href={"/login"} className="py-1 cursor-pointer hover:text-[#ef4a23]"> Login</Link>
                                </p>
                            </div>
                        </div>
                        <Link href={"pc_builder"} className="mx-5 flex items-center justify-center rounded-md" style={{ border: '1px solid #ef4a23' }}>
                            <button href='pc' style={{ border: '1px solid red' }} className="text-[#fff] h-full w-[100%] px-5">PC Builder</button>
                        </Link>
                    </div>


                </div>
            </div>


        </div>
    );
};

export default Navbar;