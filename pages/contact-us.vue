<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Contact Us" 
            pageDesc="Drop us Message for any Query" 
        />
        <Contact />
        <BestSupport />
        <OurLovingClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/contact-us/PageTitle';
import Contact from '../components/contact-us/Contact'
import BestSupport from '../components/contact-us/BestSupport'
import OurLovingClients from '../components/contact-us/OurLovingClients'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Contact,
        BestSupport,
        OurLovingClients,
        FooterStyleOne,
    }
};
</script>