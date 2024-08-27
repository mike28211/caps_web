const AllResponderTable = () => {
    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="py-6 px-4 md:px-6 xl:px-7.5">
                <h4 className="text-xl font-semibold text-black dark:text-white">
                    All Responders
                </h4>
            </div>

            <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-3 flex items-center">
                    <p className="font-medium">Name</p>
                </div>
                <div className="col-span-2 hidden items-center sm:flex">
                    <p className="font-medium">Role</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="font-medium">Email</p>
                </div>
            </div>

            <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-3 flex items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <p className="text-sm text-black dark:text-white">
                            Miguel Trinidad
                        </p>
                    </div>
                </div>
                <div className="col-span-2 hidden items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">Hotline Responder</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">migueltrinidad@gmail.com</p>
                </div>
            </div>
            <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-3 flex items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <p className="text-sm text-black dark:text-white">Mikko Minoza</p>
                    </div>
                </div>
                <div className="col-span-2 hidden items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">Hotline Responder</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">alanmikko@gmail.com</p>
                </div>
            </div>
            <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-3 flex items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <p className="text-sm text-black dark:text-white">
                            Fritz Sasing
                        </p>
                    </div>
                </div>
                <div className="col-span-2 hidden items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">Hotline Responder</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">fritsasing@gmail.com</p>
                </div>
            </div>
            <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
                <div className="col-span-3 flex items-center">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <p className="text-sm text-black dark:text-white">Ian Wendel Flores</p>
                    </div>
                </div>
                <div className="col-span-2 hidden items-center sm:flex">
                    <p className="text-sm text-black dark:text-white">Hotline Responder</p>
                </div>
                <div className="col-span-1 flex items-center">
                    <p className="text-sm text-black dark:text-white">ianflores@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default AllResponderTable;
