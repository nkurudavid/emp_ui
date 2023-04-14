<template>

    <div class="container">
        <footer class="py-5">
            <div class="row">
                <div class="col-6 col-md-6 mb-3">
                    <h6>Quick Links</h6>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><RouterLink to="/" :class="'nav-link p-0 text-secondary'">Home</RouterLink></li>
                        <li class="nav-item mb-2"><RouterLink to="/departments" :class="'nav-link p-0 text-secondary'">Departments</RouterLink></li>
                        <li class="nav-item mb-2"><RouterLink to="/employees" :class="'nav-link p-0 text-secondary'">Employees</RouterLink></li>
                    </ul>
                </div>

                <div class="col-md-5 offset-md-1 mb-3">
                    <form>
                        <h6>Subscribe to our newsletter</h6>
                        <p>Monthly digest of what's new and exciting from us.</p>
                        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label for="newsletter1" class="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                            <button class="btn btn-primary" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>&copy; 2023 Employment Management Portal, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                    <li class="ms-3">
                        <a class="link-body-emphasis" href="#">
                            <svg class="bi" width="24" height="24">
                                <use xlink:href="#twitter" />
                            </svg>
                        </a>
                    </li>
                    <li class="ms-3">
                        <a class="link-body-emphasis" href="#">
                            <svg class="bi" width="24" height="24">
                                <use xlink:href="#instagram" />
                            </svg>
                        </a>
                    </li>
                    <li class="ms-3">
                        <a class="link-body-emphasis" href="#">
                            <svg class="bi" width="24" height="24">
                                <use xlink:href="#facebook" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>

</template>