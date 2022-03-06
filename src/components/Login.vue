<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <form>
                    <fieldset>
                        <div class="form-group">
                            <label class="form-label mt-4">Enter Email</label>
                            <input type="email" class="form-control" placeholder="Enter email">
                        </div>

                        <div class="form-group">
                            <label class="form-label mt-4">Enter Password</label>
                            <input type="password" class="form-control"
                                placeholder="Enter Password">
                        </div>

                        <button class="btn btn-primary mt-4">Submit</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login'
    }
</script>