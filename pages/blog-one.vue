<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Blog" 
            pageDesc="News and Insights" 
        />
        <Blog />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import Blog from '../components/blog-one/Blog'
import FreeTrial from '../components/Common/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Blog,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>