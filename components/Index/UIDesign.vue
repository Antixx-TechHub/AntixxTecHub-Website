<template>
    <div class="services-area bg-right-shape ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="services-content it-service-content">
                    <div class="content left-content">
                        <div class="icon">
                            <img src="~/assets/img/icon1.png" alt="image">
                        </div>
                        <h2>UX / UI Design</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i>  
                                    Mobile App Design
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Web Design
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    eCommerce Design
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Product Design
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    UX / UI Design
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Business Card Design
                                </div>
                            </div>
                        </div>

                        <NuxtLink to="/single-service" class="default-btn">
                            <i class="bx bxs-spreadsheet"></i> 
                            Learn More 
                            <span></span>
                        </NuxtLink>
                    </div>
                </div>

                <div class="services-image">
                    <div class="image">
                        <img src="~/assets/img/services-image/service3.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UIDesign'
}
</script>