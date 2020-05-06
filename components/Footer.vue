<script>
export default {
  name: 'Footer'
}
</script>

<template>
  <footer class="px-4 pt-16 pb-24 text-sm font-light">
    <div class="container max-w-screen-xl">
      <div class="flex flex-col justify-between pt-10 border-t-2 border-gray-200 lg:flex-row">
        <div class="pt-6 text-center lg:text-left">
          <p>
            <span>Teodoro Sampaio Street, 2767 Office 22 - Pinheiros,</span>
            <span class="whitespace-no-wrap">São Paulo, Brasil -</span>
            <span class="whitespace-no-wrap">CEP: 05405-250</span>
          </p>
          <p>
            <a
              href="mailto:oi@influu.me"
              class="font-medium hoverable focusable hover:text-pink-800"
            >oi@influu.me</a>
          </p>
          <p>CNPJ: 19.354.277/0001-40</p>
        </div>
        <div class="pt-6 text-center lg:text-right">
          <p>
            Copyright ©
            <a
              href="https://influu.me/"
              target="_blank"
              class="font-medium hoverable focusable hover:text-pink-800"
            >influu.me 2019</a>
          </p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>
