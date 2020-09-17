<template>
  <!-- Footer -->
  <mdb-footer color="stylish-color-dark" class="page-footer font-small pt-4 mt-4 footervue">
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col md="4" style="padding-left: 0px; padding-right: 0px;">
          <img src="@/assets/logos/pop.png" style="width:300px" alt="">
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Início</h5>
          <ul class="list-unstyled">
            <li><a href="#!" style="color: black;">Home</a></li>
            <li><a href="#!" style="color: black;">Produtos</a></li>
            <li><a href="#!" style="color: black;">Ajuda</a></li>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Sobre</h5>
          <ul class="list-unstyled">
            <li><a href="#!" style="color: black;">Sobre-nós</a></li>
            <li><a href="#!" style="color: black;">Blog</a></li>
            <li><a href="#!" style="color: black;">Fale com a gente!</a></li>
          </ul>
        </mdb-col>
        <hr class="clearfix w-100 d-md-none" />
        <mdb-col md="2">
          <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Suporte</h5>
          <ul class="list-unstyled">
            <li><a href="#!" style="color: black;">Contato via email</a></li>
            <li><a href="#!" style="color: black;">Telefone: (11)99999-9999</a></li>
            <li><a href="#!" style="color: black;">Endereço: Av.loremIpsun, 999, SP- Brazil</a></li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <!-- <hr />
    <div class="text-center py-3">
      <ul class="list-unstyled list-inline mb-0">
        <li class="list-inline-item">
          <h5 class="mb-1">Register for free</h5>
        </li>
        <li class="list-inline-item"><a href="#" class="btn btn-danger btn-rounded">Sign up!</a></li>
      </ul>
    </div> -->
    <hr />
    <div class="text-center">
      <ul class="list-unstyled list-inline">
            <a class="fb-ic"><i class="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x" style="color: #404040"> </i></a>
            <a class="tw-ic"><i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x" style="color: #404040"> </i></a>
            <a class="gplus-ic"><i class="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x" style="color: #404040"> </i></a>
            <a class="li-ic"><i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x" style="color: #404040"> </i></a>
            <a class="ins-ic"><i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x" style="color: #404040"> </i></a>
            <a class="pin-ic"><i class="fab fa-pinterest fa-lg white-text fa-2x" style="color: #404040"> </i></a>
      </ul>
    </div>
    <div class="footer-copyright text-center py-3 footercopy">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a> Igor de Souza Melleiro </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>

<style>
    .footervue{
        background: #D9D9D9;
    }
    .footercopy{
        background: #404040;
        color: #FFFF;
    }
    .text-uppercase{
      color: #990000;
    }
    .list-unstyled li{
       width: 300px;
       color: black;
    }
</style>