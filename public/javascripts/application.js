number_of_products = 0;
number_of_segments = 0;

product = "\
            <h3 id='title_product_new_id'> \
              <a href='#' onclick='Effect.toggle(\"product_new_id\", \"appear\"); return false;'> \
                Product counting_from_1\
              </a> \
              <a href='#' onclick=\"if (confirm('Are you sure?')) {remove_product(this, new_id); return false;} else {return false;}\" style='float: right;' title='delete'> \
                <img alt='delete' src='images/no.gif' /> \
              </a> \
              <input name='product_new_id[delete]' type='hidden' value='false' /> \
            </h3> \
            <div id='product_new_id' style='display:visible;'> \
              <div class='span-8 border'> \
                <p> \
                  <label name='product_new_id[name]' type='text'>Name</label> \
                  <br /> \
                  <small>Just to recognize it</small> \
                  <br /> \
                  <input class='text' name='product_new_id[name]' type='text' value='Product counting_from_1' /> \
                </p> \
                <p> \
                  <label name='product_new_id[qty]' type='text'>Quantity</label> \
                  <br /> \
                  <small>Amount of stocks of this product</small> \
                  <br /> \
                  <input class='text' name='product_new_id[qty]' type='text' value='100' /> \
                </p> \
              </div> \
              <div class='span-7 border'> \
                <p> \
                  <label name='product_new_id[Q]' type='text'>Quality</label> \
                  <br /> \
                  <small>Range 0 - 100</small> \
                  <br /> \
                  <input class='text' name='product_new_id[Q]' type='text' value='0' /> \
                </p> \
                <p> \
                  <label name='product_new_id[P]' type='text'>Price</label> \
                  <br /> \
                  <small>Range 0 - 100</small> \
                  <br /> \
                  <input class='text' name='product_new_id[P]' type='text' value='0' /> \
                </p> \
                <p> \
                  <label name='product_new_id[I]' type='text'>Brand Identity</label> \
                  <br /> \
                  <small>Range 0 - 100</small> \
                  <br /> \
                  <input class='text' name='product_new_id[I]' type='text' value='0' /> \
                </p> \
              </div> \
              <div class='span-7 last'> \
                <p> \
                  <label name='product_new_id[Adv]' type='text'>Advertising</label> \
                  <br /> \
                  <small>Range 0 - 100</small> \
                  <br /> \
                  <input class='text' name='product_new_id[Adv]' type='text' value='0' /> \
                </p> \
                <p> \
                  <label name='product_new_id[Chan]' type='text'>Channel</label> \
                  <br /> \
                  <small>Range 0 - 100</small> \
                  <br /> \
                  <input class='text' name='product_new_id[Chan]' type='text' value='0' /> \
                </p> \
                <p> \
                  <label name='product_new_id[Sha]' type='text'>Mkt Share</label> \
                  <br /> \
                  <small>Range 0 - 100</small> \
                  <br /> \
                  <input class='text' name='product_new_id[Sha]' type='text' value='0' /> \
                </p> \
              </div> \
            </div> \
            <hr class='clear' id='hr_product_new_id' />";
            
segment = "\
            <h3 id='title_segment_new_id'> \
              <a href='#' onclick=\"Effect.toggle('segment_new_id', 'appear'); return false;\"> \
                Segment counting_from_1\
              </a> \
              <a href='#' onclick=\"if (confirm('Are you sure?')) {remove_segment(this, new_id); return false;} else {return false;}\" style='float: right;' title='delete'> \
                <img alt='delete' src='images/no.gif' /> \
              </a> \
              <input name='segment_new_id[delete]' type='hidden' value='false' /> \
            </h3> \
            <div id='segment_new_id' style='display:visible;'> \
              <div class='span-8 border'> \
                <p> \
                  <label name='segment_new_id[name]' type='text'>Name</label> \
                  <br /> \
                  <small>Just to recognize it</small> \
                  <br /> \
                  <input class='text' name='segment_new_id[name]' type='text' value='Segment counting_from_1' /> \
                </p> \
                <p> \
                  <label name='segment_new_id[Size]' type='text'>Size</label> \
                  <br /> \
                  <small>The size of the customer base</small> \
                  <br /> \
                  <input class='text' name='segment_new_id[Size]' type='text' value='250' /> \
                </p> \
                <p> \
                  <label name='segment_new_id[Budget]' type='text'>Budget</label> \
                  <br /> \
                  <small>Total budget for each customer</small> \
                  <br /> \
                  <input class='text' name='segment_new_id[Budget]' type='text' value='100.0' /> \
                </p> \
              </div> \
              <div class='span-7 border'> \
                <p> \
                  <label name='segment_new_id[alpha]' type='text'>Alpha (Quality Elasticity)</label> \
                  <br /> \
                  <small>Range 0.0 - 1.0</small> \
                  <br /> \
                  <input class='text' name='segment_new_id[alpha]' type='text' value='0.2' /> \
                </p> \
                <p> \
                  <label name='segment_new_id[beta]' type='text'>Beta (Price Elasticity)</label> \
                  <br /> \
                  <small>Range 0.0 - 1.0</small> \
                  <br /> \
                  <input class='text' name='segment_new_id[beta]' type='text' value='0.7' /> \
                </p> \
                <p> \
                  <label name='segment_new_id[gamma]' type='text'>Gamma (Brand Identity Elasticity)</label> \
                  <br /> \
                  <small>Range 0.0 - 1.0</small> \
                  <br /> \
                  <input class='text' name='segment_new_id[gamma]' type='text' value='0.1' /> \
                </p> \
              </div> \
              <div class='span-7 last'> \
                <p> \
                  <label name='segment_new_id[M]' type='text'>M (Advertising Sensitivity)</label> \
                  <br /> \
                  <small>Range 0.0 - 1.0</small> \
                  <br /> \
                  <input class='text' name='segment_new_id[M]' type='text' value='0.3' /> \
                </p> \
                <p> \
                  <label name='segment_new_id[N]' type='text'>N (Channel Sensitivity)</label> \
                  <br /> \
                  <small>Range 0.0 - 1.0</small> \
                  <br /> \
                  <input class='text' name='segment_new_id[N]' type='text' value='0.7' /> \
                </p> \
                <p> \
                  <label name='segment_new_id[O]' type='text'>O (Mkt Share Sensitivity)</label> \
                  <br /> \
                  <small>Range 0.0 - 1.0</small> \
                  <br /> \
                  <input class='text' name='segment_new_id[O]' type='text' value='0.0' /> \
                </p> \
              </div> \
            </div> \
            <hr class='clear' id='hr_segment_new_id' /> ";

function insert_product(link) {
  number_of_products++;
  var new_id = number_of_products - 1;
  var regexp = new RegExp("new_id", "g")
  var regexp2 = new RegExp("counting_from_1", "g")
  newproduct = product
  $(link).up().insert({
    before: newproduct.replace(regexp, new_id).replace(regexp2, new_id + 1)
  });
}

function remove_product(link, id) {
  var hidden_field = $(link).next("input[type=hidden]");
  if (hidden_field) {
    hidden_field.value = '1';
  }
  $("product_" + id).hide();
  $("title_product_" + id).hide();
  $("hr_product_" + id).hide();
}

function insert_segment(link) {
  number_of_segments++;
  var new_id = number_of_segments - 1;
  var regexp = new RegExp("new_id", "g")
  var regexp2 = new RegExp("counting_from_1", "g")
  newsegment = segment
  $(link).up().insert({
    before: newsegment.replace(regexp, new_id).replace(regexp2, new_id + 1)
  });
}

function remove_segment(link, id) {
  var hidden_field = $(link).next("input[type=hidden]");
  if (hidden_field) {
    hidden_field.value = '1';
  }
  $("segment_" + id).hide();
  $("title_segment_" + id).hide();
  $("hr_segment_" + id).hide();
}

