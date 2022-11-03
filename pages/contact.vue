<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Contact Us" 
            pageDesc="Drop us Message for any Query" 
        />
        <Contact />
        <OurLovingClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import Contact from '../components/Contact/Contact'
import OurLovingClients from '../components/Common/OurLovingClients'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Contact,
        OurLovingClients,
        FooterStyleOne,
    }
};
</script>