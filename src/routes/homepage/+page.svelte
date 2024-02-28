<body>
    <div class="bg-amber-300 flex w-screen h-screen justify-center items-center">
        <div class="flex h-[90vh] w-[50vw] bg-white rounded-[50px] items-center justify-around flex-col">
            <div aria-hidden="true" class="flex h-[20vh] w-[30vw] border-black border-[1px] hover:scale-110 ease-in duration-100 mt-[8vh] justify-center items-center" on:click={toDonar}>
                <h1 class="text-4xl">Donar</h1>
            </div>
            <div aria-hidden="true" class="flex h-[20vh] w-[30vw] border-black border-[1px] hover:scale-110 ease-in duration-100 mb-[8vh] justify-center items-center" on:click={toNgo}>
                <h1 class="text-4xl">NGO</h1>
            </div>
        </div>
    </div>
</body>
<script>
    import {goto} from "$app/navigation"
    function toNgo(){
        goto("/homepage/ngo")
    }
    function toDonar(){
        goto("/homepage/donar")
    }
</script>