//JavaScript Document
var v_ans_nst = "";
var v_ans_gc = "";
var v_ans_depth = ""; 
var v_ans_perm = "";  
var v_ans_nocoal = "";
var v_ans_vert = "";                 
var myTemp = "";
var res_nst = "";
var res_gc = "";
var res_depth = "";
var res_rank = "";
var res_cs = "";
var res_perm = "";
var res_aec = "";
var res_well = "";
        


   JotForm.init();
                      /*
    function toggle() {
      	var ele = document.getElementById("id_14");
          	if(ele.style.display == "none") {
                ele.style.display = "block";
                alert("display = block");
            }
          	else {
          	    ele.style.display = "none";
                alert("display = none");
          	}
    }    */
    
   function hideAll() {
        document.getElementById("id_4").style.display = "none";
      	document.getElementById("id_5").style.display = "none";
        document.getElementById("id_6").style.display = "none";
        document.getElementById("id_7").style.display = "none";
        document.getElementById("id_8").style.display = "none";
        document.getElementById("id_9").style.display = "none";
        document.getElementById("id_14").style.display = "none";
        document.getElementById("id_12").style.display = "none";
        document.getElementById("id_11").style.display = "none";
        document.getElementById("id_10").style.display = "none";
        document.getElementById("id_13").style.display = "none";
        document.getElementById("id_15").style.display = "none";
        document.getElementById("id_16").style.display = "none";
        document.getElementById("id_18").style.display = "none";
    } 
  
function ele_aliases(){
      el_in_nst = document.getElementById("input_3");
      el_in_gc = document.getElementById("input_4");
      el_in_depth = document.getElementById("input_7");
      el_in_perm = document.getElementById("input_8");
      el_in_nocoal = document.getElementById("input_11");
      el_in_vert = document.getElementById("input_13");
      el_in_rank = document.getElementsByName("q5_coalRank5");
      el_in_cs = document.getElementById("input_6");
      el_in_aec = document.getElementById("input_9");
      el_in_dip = document.getElementById("input_10");
      el_in_well = document.getElementsByName("q18_Well18");
      
      el_gc = document.getElementById("id_4");     
      el_depth = document.getElementById("id_7");
      el_rank = document.getElementById("id_5");
      el_well = document.getElementById("id_18");
      el_perm = document.getElementById("id_8");
      el_nocoal = document.getElementById("id_11"); 
      el_vert = document.getElementById("id_13"); 
      el_cs = document.getElementById("id_6");
      el_aec = document.getElementById("id_9");
      el_dip = document.getElementById("id_10");       
      
      el_in_textarea = document.getElementById("input_17");
      //-----------------------------------------------------
      elc_nst_vl_from = document.getElementById("c_nst_vl_from").value;
      elc_nst_vl_to = document.getElementById("c_nst_vl_to").value;
      elc_nst_l_from = document.getElementById("c_nst_l_from").value;
      elc_nst_l_to = document.getElementById("c_nst_l_to").value;
      elc_nst_m_from = document.getElementById("c_nst_m_from").value;
      elc_nst_m_to = document.getElementById("c_nst_m_to").value;
      elc_nst_h_from = document.getElementById("c_nst_h_from").value;
      elc_nst_h_to = document.getElementById("c_nst_h_to").value;
      elc_nst_vh_morethan = document.getElementById("c_nst_vh_morethan").value;
      
      elc_gc_l_from = document.getElementById("c_gc_l_from").value;
      elc_gc_l_to = document.getElementById("c_gc_l_to").value; 
      elc_gc_h_morethan = document.getElementById("c_gc_h_morethan").value;
      
      elc_depth_sh_from = document.getElementById("c_depth_sh_from").value;
      elc_depth_sh_to = document.getElementById("c_depth_sh_to").value;
      elc_depth_l_from = document.getElementById("c_depth_l_from").value;
      elc_depth_l_to = document.getElementById("c_depth_l_to").value;
      elc_depth_m_from = document.getElementById("c_depth_m_from").value;
      elc_depth_m_to = document.getElementById("c_depth_m_to").value;
      elc_depth_d_from = document.getElementById("c_depth_d_from").value;
      elc_depth_d_to = document.getElementById("c_depth_d_to").value;
      elc_depth_vd_morethan = document.getElementById("c_depth_vd_morethan").value;
      
      elc_perm_l_from = document.getElementById("c_perm_l_from").value;
      elc_perm_l_to = document.getElementById("c_perm_l_to").value; 
      elc_perm_m_from = document.getElementById("c_perm_m_from").value; 
      elc_perm_m_to = document.getElementById("c_perm_m_to").value; 
      elc_perm_h_from = document.getElementById("c_perm_h_from").value; 
      elc_perm_h_to = document.getElementById("c_perm_h_to").value; 
      elc_perm_vh_morethan = document.getElementById("c_perm_vh_morethan").value;
      
      elc_nocoal_l = document.getElementById("c_nocoal_l").value;
      elc_nocoal_h = document.getElementById("c_nocoal_h").value;   
      
      elc_vert_l = document.getElementById("c_vert_l").value;
      elc_vert_h = document.getElementById("c_vert_h").value;    
      
      elc_rank_l_from = document.getElementById("c_rank_l_from").value;
      elc_rank_l_to = document.getElementById("c_rank_l_to").value;  
      elc_rank_m_from = document.getElementById("c_rank_m_from").value;  
      elc_rank_m_to = document.getElementById("c_rank_m_to").value;  
      elc_rank_h_from = document.getElementById("c_rank_h_from").value;  
      elc_rank_h_to = document.getElementById("c_rank_h_to").value; 
      
      elc_cs_l_from = document.getElementById("c_cs_l_from").value;
      elc_cs_l_to = document.getElementById("c_cs_l_to").value;
      elc_cs_h_morethan = document.getElementById("c_cs_h_morethan").value;
      
      elc_aec_l_from = document.getElementById("c_aec_l_from").value;
      elc_aec_l_to = document.getElementById("c_aec_l_to").value;
      elc_aec_h_morethan = document.getElementById("c_aec_h_morethan").value;   
      
      elc_dip_l = document.getElementById("c_dip_l").value;
      elc_dip_h = document.getElementById("c_dip_h").value;  
  }
  
  function msgbox(myVal){
      if (myVal=="fb"){
          alert("Fill in the blanks!");
      }
  }
   
  function msg(myVal){
  if (myTemp != myVal){
      myTemp=myVal;
      if (myVal=="ne"){
          mmsg="!!Not economical under current technology!!.\n";
      }
      else if (myVal=="nop"){
          mmsg=":No option for this case, modification of Ramaswamy's tesis needed.\n";
      }
      else if (myVal=="gcl"){
          mmsg=":Gas Content is low.\n";
      }
      else if (myVal=="gch"){
          mmsg=":Gas Content is high.\n";
      }
      else if (myVal=="vwch"){
          mmsg=":>VERTICAL WELL CASED HOLE COMPLETION WITH HYDRAULIC FRACTURE STIMULATION.\n";
      }
      else if (myVal=="vwwt"){
          mmsg=":>VERTICAL WELL WITH TOPSET UNDER REAM COMPLETION.\n";
      }
      else if (myVal=="vwwo"){
          mmsg=":>VERTICAL WELL WITH OPEN HOLE CAVITY COMPLETION or\n";
      }
      else if (myVal=="nstvl"){
          mmsg=":Net Seam Thickness is very low.\n";
      }
      else if (myVal=="nstl"){
          mmsg=":Net Seam Thickness is low.\n";
      }
      else if (myVal=="nstm"){
          mmsg=":Net Seam Thickness is medium.\n";
      }
      else if (myVal=="nsth"){
          mmsg=":Net Seam Thickness is high.\n";
      }
      else if (myVal=="nstvh"){
          mmsg=":Net Seam Thickness is very high.\n";
      }
      else if (myVal=="rankl"){
          mmsg=":Rank is low.\n";
      }
      else if (myVal=="rankm"){
          mmsg=":Rank is medium.\n";
      }
      else if (myVal=="rankh"){
          mmsg=":Rank is high.\n";
      }
      else if (myVal=="depthsh"){
          mmsg=":Depth is shallow.\n";
      }
      else if (myVal=="depthl"){
          mmsg=":Depth is low.\n";
      }
      else if (myVal=="depthm"){
          mmsg=":Depth is medium.\n";
      }
      else if (myVal=="depthd"){
          mmsg=":Depth is deep.\n";
      }
      else if (myVal=="depthvd"){
          mmsg=":Depth is very deep.\n";
      }
      else if (myVal=="csl"){
          mmsg=":Compressive Strength is low.\n";
      }
      else if (myVal=="csh"){
          mmsg=":Compressive Strength is high.\n";
      }
      else if (myVal=="perml"){
          mmsg=":Permeability is low.\n";
      }
      else if (myVal=="permm"){
          mmsg=":Permeability is medium.\n";
      }
      else if (myVal=="permh"){
          mmsg=":Permeability is high.\n";
      }
      else if (myVal=="permvh"){
          mmsg=":Permeability is very high.\n";
      }
      else if (myVal=="pinn"){
          mmsg=":>PINNATE OR QUAD LATERAL.\n";
      }
      else if (myVal=="sing"){
          mmsg=":>SINGLE LATERAL.\n";
      }
      else if (myVal=="nocoall"){
          mmsg=":Number of Coal Seams is low.\n";
      }
      else if (myVal=="nocoalh"){
          mmsg=":Number of Coal Seams is high.\n";
      }
      else if (myVal=="vertl"){
          mmsg=":Vertical Separation is low.\n";
      }
      else if (myVal=="verth"){
          mmsg=":Vertical Separation is high.\n";
      }
      else if (myVal=="ssc"){
          mmsg=":>SINGLE STAGE COMPLETION.\n";
      }
      else if (myVal=="msc"){
          mmsg=":>MULTIPLE STAGE COMPLETION.\n";
      }
      else if (myVal=="aecl"){
          mmsg=":Areal Extent of Coal is low.\n";
      }
      else if (myVal=="aech"){
          mmsg=":Areal Extent of Coal is high.\n";
      }
      else if (myVal=="dipl"){
          mmsg=":DIP of coal seams is low.\n";
      }
      else if (myVal=="diph"){
          mmsg=":DIP of coal seams is high.\n";
      }
      else if (myVal=="hwwl"){
          mmsg=":>HORIZONTAL WELL WITH LINER.\n";
      }
      else if (myVal=="wellv"){
          mmsg=":Well is vertical.\n";
      }
      else if (myVal=="wellh"){
          mmsg=":Well is horizontal.\n";
      }
      else {
          mmsg=":No option message";
      }
      el_in_textarea.value = el_in_textarea.value + mmsg;
    }
  }
  
  function rs_nst(valu){    
          if (valu >= elc_nst_vl_from && valu < elc_nst_vl_to) {   
              res_nst = "vl";msg("nstvl");
          }
          else if ((valu >= elc_nst_l_from) && (valu < elc_nst_l_to)){
              res_nst = "l";msg("nstl");
          }
          else if ((valu >= elc_nst_m_from) && (valu < elc_nst_m_to)){
              res_nst = "m";msg("nstm");
          }
          else if ((valu >= elc_nst_h_from) && (valu < elc_nst_h_to)){
              res_nst = "h";msg("nsth");
          }
          else if (valu >= elc_nst_vh_morethan){
              res_nst = "vh";msg("nstvh");
          }      
  return res_nst;   
  }  
  
  function nst(myVal){ 
      if (el_in_nst.value.match(/\S/)){
          if (rs_nst(myVal)=="vl"){ 
              msg("ne"); 
          }    
          else if ((rs_nst(myVal)=="l") || (rs_nst(myVal)=="m") || (rs_nst(myVal)=="h") || (rs_nst(myVal)=="vh")) {
              el_gc.style.display = "block";
          } 
          el_in_nst.disabled = true;
      }
      else {msgbox("fb");}
  }
  
  function rs_gc(valu){   
      if (valu >= elc_gc_l_from && valu < elc_gc_l_to) {
          res_gc="l";msg("gcl");    
      }
      else if (valu >= elc_gc_h_morethan){
          res_gc="h";msg("gch");  
      }   
      return res_gc;   
  }  
  
  function gc(myVal){
      if (el_in_gc.value.match(/\S/)){
              if (rs_gc(myVal)=="l"){
                  if (res_nst=="l" || res_nst=="m" || res_nst=="h"){
                      msg("ne"); 
                  }  
                  else if (res_nst=="vh"){
                      el_depth.style.display = "block";
                  }
              }
              else if (rs_gc(myVal)=="h"){
                  if (res_nst=="l" || res_nst=="m" || res_nst=="h" || res_nst=="vh"){
                      el_rank.style.display = "block";  
                  }        
              }
          el_in_gc.disabled = true;
      }
      else {msgbox("fb");}
  }
  
  function rs_rank(valu){
    ele_aliases();
      if ((el_in_rank[0].checked==true) || (el_in_rank[1].checked==true)){
          res_rank="l";msg("rankl");
      }
      else if ((el_in_rank[2].checked==true ) || (el_in_rank[3].checked==true) || (el_in_rank[4].checked==true)) {
          res_rank="m";msg("rankm");
      }
      else {
          res_rank="h";msg("rankh");
      }
      return res_rank;
  }
  
  function rank(myVal){
          if (rs_rank(myVal)=="l"){
              if ((res_nst=="l") || (res_nst=="m") || (res_nst=="h")){
                  msg("ne");        
              }
              else if (res_nst=="vh"){
                  el_depth.style.display = "block";
              }  
          }
          else if (rs_rank(myVal)=="m"){
              el_cs.style.display = "block";
          }
          else if (rs_rank(myVal)=="h"){
              msg("ne");
          }
      rankdisabled(true);
  }
  
  function rankdisabled(flag){
      el_in_rank[0].disabled=flag;
      el_in_rank[1].disabled=flag;
      el_in_rank[2].disabled=flag;
      el_in_rank[3].disabled=flag;
      el_in_rank[4].disabled=flag;
      el_in_rank[5].disabled=flag;
      el_in_rank[6].disabled=flag;
  }
  
  function welldisabled(flag){
      el_in_well[0].disabled=flag;
      el_in_well[1].disabled=flag;
  }
  
  function rs_depth(valu){
      if (valu >= elc_depth_sh_from && valu < elc_depth_sh_to){
          res_depth="sh";msg("depthsh");    
      }    
      else if ((valu >= elc_depth_l_from) && (valu < elc_depth_l_to)){
          res_depth="l";msg("depthl");
      }
      else if (valu >= elc_depth_m_from && valu < elc_depth_m_to){
          res_depth="m";msg("depthm");
      } 
      else if (valu >= elc_depth_d_from && valu < elc_depth_d_to){
          res_depth="d";msg("depthd");
      }
      else if (valu >= elc_depth_vd_morethan) {
          res_depth="vd";msg("depthvd");
      }
      return res_depth;
  }

  function depth(myVal){                                                                                                            
  if (el_in_depth.value.match(/\S/)){
        if ((res_cs=="h") || (res_cs=="l") || (res_perm=="m")){            
                    if (res_nst=="l" || res_nst=="m"){
                        if (rs_depth(myVal)=="l" || rs_depth(myVal)=="m" ){
                            el_aec.style.display="block";
                        }
                        else if (rs_depth(myVal)=="sh" || rs_depth(myVal)=="d"){
                            msg("vwch");el_nocoal.style.display = "block";
                        } 
                        else if (rs_depth(myVal)=="vd"){
                            msg("ne");
                        }
                    }
                    else if (res_nst=="h"){
                        if (rs_depth(myVal)=="sh" || rs_depth(myVal)=="m" || rs_depth(myVal)=="d"){
                            msg("vwch");el_nocoal.style.display = "block";
                        }
                        else if (rs_depth(myVal)=="vd"){
                            msg("ne");
                        } 
                        else {
                            alert("No option for this case. Depth may be low.");msg("nop");
                        }
                    }
                    else {
                        alert("No option for this case. Other option: Net seam thickness's low, medium or high.");msg("nop");
                    }           
        }
        else if ((res_gc=="l") || (res_rank=="l")){ 
            if (res_nst=="vh"){
                if (rs_depth(myVal)=="m" || rs_depth(myVal)=="d"){
                    msg("ne");
                }   
                else if (rs_depth(myVal)=="sh" || rs_depth(myVal)=="l"){
                    el_perm.style.display="block";
                } 
                else {
                   msg("nop");
                } 
            }
            else {
                msg("nop");
            }     
        }
        else {
            alert("No option for this case. Other option: compressive strenght's high or low, permeability's medium, gas content's low and rank's low");msg("nop");
        }
        el_in_depth.disabled = true; 
    }
    else {
      msgbox("fb");
    }
  }
  
  function rs_cs(valu){
      if  (valu >= elc_cs_l_from && valu < elc_cs_l_to) {
          res_cs="l";msg("csl");
      }
      else if (valu >= elc_cs_h_morethan){
          res_cs="h";msg("csh");
      }
      return res_cs;
  }
  
  function cs(myVal){
  if (el_in_cs.value.match(/\S/)){
      if (rs_cs(myVal)=="l"){
          el_perm.style.display="block";
      }
      else if (rs_cs(myVal)=="l" || rs_cs(myVal)=="m" || rs_cs(myVal)=="h"){
          el_depth.style.display="block";
      }
  el_in_cs.disabled=true;
  }
  else {msgbox("fb");}
  }
  
  function rs_perm(valu){
      if (valu >= elc_perm_l_from && valu < elc_perm_l_to){
          res_perm="l";msg("perml");
      }
      else if (valu >= elc_perm_m_from && valu < elc_perm_m_to){
          res_perm="m";msg("permm");
      } 
      else if (valu >= elc_perm_h_from && valu < elc_perm_h_to){
          res_perm="h";msg("permh");
      }
      else if (valu >= elc_perm_vh_morethan){
          res_perm="vh";msg("permvh");
      }
      return res_perm;   
  }
  
  function perm(myVal){
      if (el_in_perm.value.match(/\S/)){   
           if (res_well=="h"){
                if (rs_perm(myVal)=="l"){
                    msg("pinn");
                }
                else if (rs_perm(myVal)=="m" || rs_perm(myVal)=="h"){
                    msg("sing");
                }
                else {
                    msg("nop");
                }   
            }      
            else if (res_depth=="sh" || res_depth=="l"){   
                if (rs_perm(myVal)=="l"){
                    msg("ne");
                } 
                else if (rs_perm(myVal)=="m" || rs_perm(myVal)=="h"){
                    msg("vwch");el_nocoal.style.display="block";
                }
                else if (rs_perm(myVal)=="vh"){
                    msg("vwwt");
                }
                else {
                    msg("nop");
                }    
            }            
            else if (res_cs=="l"){
                if (rs_perm(myVal)=="h"){
                    msg("vwwo");msg("vwch");el_nocoal.style.display="block";    
                }
                else if (rs_perm(myVal)=="m" || rs_perm(myVal)=="l"){
                    if (res_nst=="l" || res_nst=="m" || res_nst=="h"){
                        el_depth.style.display = "block";
                    }
                    else {
                        msg("nop");
                    }
                }      
                else {
                   msg("nop");
                }
            }
            el_in_perm.disabled=true;
      }
      else {
          msgbox("fb");
      }

  }
  
  function rs_nocoal(valu){
      if (valu >= elc_nocoal_h){
          res_nocoal="h";msg("nocoalh");
      }
      else if (valu < elc_nocoal_l){
          res_nocoal="l";msg("nocoall");
      }
      return res_nocoal;
  }  
  
  function nocoal(myVal){
     if (el_in_nocoal.value.match(/\S/)){
          if (rs_nocoal(myVal)=="l"){
              msg("ssc");
          }
          else if (rs_nocoal(myVal)=="h"){
              el_vert.style.display="block"; 
          }
          el_in_nocoal.disabled=true;
      }
      else {
          msgbox("fb");
      }
  }
  
  function rs_vert(valu){
       if (valu >= elc_vert_h){
          res_vert="h";msg("vertl");
       }
       else if (valu < elc_vert_l){
          res_vert="l";msg("verth");
       }
       return res_vert;
  }
  
  function vert(myVal){
      if (el_in_vert.value.match(/\S/)){
          if (rs_vert(myVal)=="l"){
              msg("ssc");
          }
          else if (rs_vert(myVal)=="h"){
              msg("msc"); 
          }
          el_in_vert.disabled=true;
      }
      else {
          msgbox("fb");
      } 
  }
  
  
  function rs_aec(valu){
      if ((valu >= elc_aec_l_from) && (valu < elc_aec_l_to)) {
          res_aec="l";msg("aecl");
      }
      else if (valu >= elc_aec_h_morethan){
          res_aec="h";msg("aech");
      }    
      return res_aec;
  }
  
  function aec(myVal){
  if (el_in_aec.value.match(/\S/)){
      if (rs_aec(myVal)=="l"){
          if (res_depth=="l" || res_depth=="m"){
                msg("vwch");el_nocoal.style.display = "block";   
          }
          else if (res_depth=="vd"){
                msg("ne");
          }
          else {
              msg("nop");
          }
      }
      else if (rs_aec(myVal)=="h"){
          el_dip.style.display="block";
      }
      el_in_aec.disabled=true;
  }
  else {
      msgbox("fb");
  }    
  }
  
  function rs_dip(valu){
      if ((valu < elc_dip_l)) {
          res_dip="l";msg("dipl");
      }
      else if ((valu >= elc_dip_h)) {
          res_dip="h";msg("diph");      
      }    
      return res_dip;
  }
  
  function dip(myVal){
  if (el_in_dip.value.match(/\S/)){
      if (rs_dip(myVal)=="l"){
          el_well.style.display="block";
      }
      else if (rs_dip(myVal)=="h"){
          if (res_depth=="l" || res_depth=="m"){
              msg("vwch");el_nocoal.style.display = "block";
          }
          else if (res_depth=="l"){
              msg("ne");
          }
          else {
              msg("nop");
          }
      }
      el_in_dip.disabled=true;
  }
  else {
      msgbox("fb");
  }
  }    
  
  function rs_well(valu){
      if (el_in_well[0].checked == true){
          res_well="v";msg("wellv");
      }
      else if (el_in_well[1].checked == true) {
          res_well="h";msg("wellh");
      }
      return res_well;
  }  
  
  function well(myVal){ 
      if (rs_well(myVal)=="v"){
          msg("vwch");el_nocoal.style.display = "block";
      }
      else if (rs_well(myVal)=="h"){
          msg("hwwl");el_perm.style.display="block"; 
          if (res_perm=="l"){
               msg("pinn");  
          }
          else if (res_perm=="m" || res_perm=="h"){
               msg("sing");
          }         
      } 
      welldisabled(true);          
  }
  




  

