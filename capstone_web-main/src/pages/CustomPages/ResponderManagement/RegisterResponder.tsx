// import CardFour from '../../../components/CardFour.tsx';
// import CardOne from '../../../components/CardOne.tsx';
// import CardThree from '../../../components/CardThree.tsx';
// import CardTwo from '../../../components/CardTwo.tsx';


import RegisterResponderForm from '../../../components/ResponderManagement/RegisterResponderForm.tsx';

const RegisterResponder = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                {/* <CardOne />
                <CardTwo />
                <CardThree />
                <CardFour /> */}
            </div>

            <div className="">
                {/* Register Responder Form */}
                {/* <h1>Register Responder</h1> */}
                <RegisterResponderForm />
            </div>
        </>
    );
};

export default RegisterResponder;
