import React from "react";
import { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";


function Contact() {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (name == "" || email == ""  || message == "") {
      alert("Sir/Mam Please Fill all the details");
    }
    else 
    {
      alert("Thank You for your Message! I'll reply ASAP");
      setEmail("")
      setMessage("")
      setName("")
    }
    
   

    emailjs
      .sendForm(
        "service_r1vkgjd",
        "template_2kh73yy",
        formRef.current,
        "MIoilCmikAH0We0_G"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h2 id="contact-header">Feel free to Leave a Message </h2>

      <div className="c">
        <div className="c-bg">
          <div className="c-wrapper">
            <div className="c-left">
              <h1 className="c-title">Let's Connect</h1>
              <div className="c-info">
                <div className="c-info-item">
                  <img
                    className="c-icon"
                    src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png"
                    alt=""
                  />
                  <h6>+91 7005763599</h6>
                </div>
                <div className="c-info-item">
                  <img
                    className="c-icon"
                    src="data:image/png;base64,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"
                    alt=""
                  />
                 <h6> mail4sandeep44@gmail.com</h6>
                </div>
                <div className="c-info-item">
                  <img
                    className="c-icon"
                    src="https://www.citypng.com/public/uploads/preview/address-location-map-black-icon-symbol-download-png-11640206707qbbrqva5rt.png"
                    alt=""
                  />
                  <h6>Lunglei, Mizoram, India</h6>
                </div>
              </div>
              <div className="colz">
                <div className="colz-icon">
                  <a
                    href="https://github.com/sandeepprogrammer64"
                    target="blank"
                    title="Github"
                  >
                    <img
                      className="icons"
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                      alt="Sandeep's GitHub"
                      rel="noreferrer"
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sandeep-prajapati64/"
                    target="blank"
                    title="Linkedin"
                  >
                    <img
                      className="icons"
                      src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://twitter.com/Sandeep63259242"
                    target="blank"
                    title="Twitter"
                    
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUoqOf////39/cAoub/+/gyrOhItesrqef9+vgapeZGtOsAo+Y/ser++vg4rukAoOXC4vff8PuJyfDW6/nz+v6j1PNuvu203PVbt+vI5fir1/Ti8ftStOp0we3q9fz1+v2w2PCUzO6Dxe328PDP6Phhve3E3/Lv5eciGLDPAAATzElEQVR4nO2dCbPqKhKAo1kIAVHjetx11Pn//3CAqFnYA9F5U9NV97569xwNX4CmaZruaPS/LtGvGzC4/J/wny/fIzyfT/PFYnGnf+an8/lrzx2ccLmYrcp1ASCKURwjJvw/EBTrcjVbLIduwJCE8025ZTgQwqgjANC/6L+zH2/LzXzAVgxEuJyVBxRL0FqIldDfitGhnA3Um0MQ/pWEjkIVm4hYcSJEyr8BWhOa8LTZTo10UkROOd1uToFbFJRwuTvE6oFpgciGbHzYBR2vAQk3W7vO0yPyrtxuwjUrFOG+NE89ETFV/IBOynIfqGVhCGd0dLriaREpZHyYBWlbCMIdQAoAjElvxChCYBegdf6EK+XoBBlOMx9EOlpXPydcaXQnxhBjrFAndohUt/oy+hHutGsDJriAmZ7AiEgZ/caqD+EsUsy/l5CCRCQzAJoR6VN8dE5/wvlBxweKLEtxlmWGQWqFGKFDf9u8N+FNvz5QDVMUyjXdGRHGty8TzgzGWVpAXBBsxWeFSKdjz6Hai/C8jvUNBmlBKKNhpXBDjOJ1L8dAH0JTB0ZUw9ClkNjMQRfEft3Yg/Co70AqDA1nhQOgHWIUH79AOAeGDgSY9aG7WCFC4KxUXQl3U1ND6RKfGpf53ojR1HX9dyQ0qJjKFqWq1GSOeiDG6wEJT6nR+4JTwOjSPp1oiQhTJ0eHC+Fdb6RFvAdBBHp1oANihO7DEBqnIJuDbIkALstEL0SXyWhPWBoXCa5DnVbB3ohxGZ5wbRyi1TpId4U+hNYD1Vrf2BIebPwwvA+xeb8UAhEewhKaAQEuMFU0OMOFH6EtYvQISYjNgHQdxBkgpOdC4YxIsrQIR2gGjPhOyXeAvsUGsUgjSEIREmh+YqVfTG4nW7FAZIYhxGEI2Rw0PBEAjzVQ+oWGB6aVA8hG3ZgJKyWjeyLIsgx7roPCd+oeSOgDCddoFohGwvVrDqqfyK20glh41QIhvuymgk0MaFwXTYTlZ6FXPpE7K0gR+fUhO/Lm8nYgKBFTPtsxgWv2f8hk3RgIdw1TTfFEuk5EL13amw4hclxdnvfF4v7clVvIDwpUiITvPgs4u/J3ERtsVD3hvWVsaxB9ZiGCx9kySfK3TJJ8scIxVPoiGSJOr8mh+t+pfqehJTx1bFHFEylir009E3aINk7ycVvyPJmXCKoRCbkm+XuVRtr9opZQaLYSse+OMN4uBLyXJOMrZZR/LMWXJJ9/ZlDal/AhmjIqxH6EMH2q+DjjWeHWg9EiGee7T/O0ClVDuDNvCP1kess1fJzxHkkMxng9pp9LtvWPdNpGTTgXt/S9TrKVAp+Jno9NyPGjuy+FoPrcudm+qdrJqCaUhLvs66elvlsImJ4MHfjqxisfSiBNeYNQtKo6vjFI+c/dCY9Ch8Fr8ny9N3ZslmVeSyAeWwFSxN2Un9VlWQGm+PL+WNJ+w1DpDVcRzsRJGJ/oC2W9SO1QAtjhYP+9LgW0lmQX0ZcJI/LY7T+KKZ91Rm+sOtNQEC7FKQfXdPgnTL++yIgHYmoPyBAf63J3by2biaC9oeJkSkG4FgnRkz8ghZjZL2wxpgOn52REdnPwLXmSTNpqN78IjjHVkiEnlIzRCFVffaJgUeV0wn2nYvx0ApSJxPOnGKdyQsmywAcpQ5wzXwVhbEXPYQqP5mVCL4lkjNHvtSe8yQgvr/eeLwigcJhvfPtNRE++cXJ5jzHYbACUnvXLCOcyYybev79/8kdNezoDi56EaOM5RmuLNC5bq2IsW/dlhFLnKKyblcwIxoQviX3sUew5RvPTu33xJWkpAqlPQ0LYXWkqOTTaxRA5YB/HBfJUM/nyZW3BdJ4s2sMNSZSNhFDaLnibNJ6SPAEH7LNYpH5dmJ8qQIiudBcpaAwbwp20C+Gq9eYn97QnYOeLXCVZcCYYH0/0TXW36BESNxkioXwD8VGlb8R52m9PSG0/H0D2/iGCV8Y3FrtQsmIIhCs5IZp1Xj0dLb02U1uPQZqftlMYR8dnXk2ZvWSDJwRrCoSKZov6IR9znevogfIapBe8vl72k7d92twD1w8wESq6MEJ3sWXJLXZGRAsPwpx55OrHi7ZpJOnELqHqpFeq4yvbwknfwP58Xdy9vK1IT7hTzS3YnYcV4j41H9u0pPA1SWtR3dbYaQmVQw7LTa18zNxh9oj+RvdbEuWxNNARys0Z/u6viqYlLFLRGhFevfdNr8dKdxdcOoZNm/CgbFrRsmmakrNoU1tEz/W+fqgakBqYasK9wkOKcZo+1MMreUKLU+KK8BKCkC1UmgfGeyVhKX0xgB1/Et2mLh+XsWWMSAjCZBFB7YWiUkkon4XsYkiB9QtZspetvoMQ5vmVmzIaRKQi3CgIWRBQFulnUJ7cC4uoKbjz3f0mz3eApBoRbRSE0m7IAClwlGbQZFDmdNdoZPTVpcn9UOsK9eW+rZxwKWtfWvCQbbpRim3eLzbc0vNcD8+4pQuViGgpJZTYM4B23vubbKYQHauPqZbx4EWYdI9sFYhNu6ZBKC6G7OSzdolaNS5PTleouU0K/fa/3TaqEA8ywpOwGPIYBPBBjOd2rZuMZw/lYLX9EgWhcF6kQIxPEsKN0KiM6Zg64td+DtGOvNC9qtRl56VM86uYnUGKCDcSwq4mZdcKopbb3sUBkSfnyxoigRJqbCOLb71IdIUMsaFNa8KOR4DOwS6ioyLMWdTII+rkjkBnH8KnVN9L/m0qEv51PkuVDLsY0npDU9cNek4p55dyC3n6j8pL5mPV5AsZoawX0Z9A2LFJ+SqRduOAermr80mSnBebVbk+pBFEwGeYiupQgVjbph/Cjm8QcMJuVDpS7RLNmCzWiQpdtT0Ax2f57keCSLqEbYOGsHUQkEyIu499HEkhRHXzX0D8mDVvwubuHmRFwS7xFsIojfxPxvwklwNGorr57PTfhM1pyHpOFYoHDz/txFztu+wgfibim7BpDnG4VHGu9D4L/hGhZqPd+dGhQ9gc39ILkp8+RsHcZT1EDMFQIqI24edUtboYIn4PvKbvl/BLRC1hW928D4RfhG+jlF8MKSSI6J5cyMuehlvbeKbvErZ78W2aRi1FU6EVqXhyhmbUPrkfq40RBHuVb3FoQuMthZqwbBG+zO4qWlt2j54bW3kyft4Is8Cmu9+MVI0u7SK+je+orWiKQmKr8d9/OaKoZXK+X67H7e3f//oFoQGwiYiahMuPMVQUQHp43TzHpxZYkuT/+gmh2Wf5aX28bBA2QhqoJSP9oJ+DJZhYxC2/2x8vGoRNm011r+DHBmkl8r2FHPFlt1WErZNfOWEdE/VLmVt4nd+Ir9PgSLBKFRLmTMVTcvOF+RrxtVxUhLqzqjfhL421D6HoLlMjvgJOK0KbMFH039CHoq9Ng1g0CG3iKXzj0ULIRBYXqkQEDUKbz/1221RJsrUFZIiwJjxbzV/kFa8VhtAekHYhOteEVvd/4PVH5nZDjKk5Wl1SEwohfgrEX/PJ3aVqwtOHUBr2LCHs7UsMRShx6muk2gNHHbPU8FJ+S+igSjnhoia07Pxfq9PE7XoHcicMcRXES5ymYZPQ0tpj4uWT9xRbq/RDeHfvwwj+cpuYq4JfVYQ9Rinb6//QlWgXlSQldLjxG//IB8XEbZA2danlevj63OVHiPIDYF1L6/XQyjfwkemPECcW+/SWNGyas9tH49/YNolrYoq4YXkjt9sv6Dj5/rqYO80l3syacOQQx8wFkv3Xu3Fivb//tLK9x3e8w4RWunwPQ4jpyEKU5h6fXZR0RcT3rzLmLktaJU0/Dfe1pY4zWZOXZACR3OIySMvXVhqzXUm/It7O8q9BOt8ja/lLXwaf+31CFN3ueWJKURJAckWIto6w6fN+n1v0uDIJEdpen4uhCYXIUrO0zi0+s9huLsI6So0VpULb1dCElothKwdC6+ypPj+0QYRPdkb6OODDdn27zvZfmIti6KwUsHglAqsIm+eHjWATC0S6g2JnpFwmX5iDY8tTtSgDaVbHAbXOgJvhszaI37bZEjujOyOM8d3I9jl+8xvMiN5ZEVzFximfElYypM4k3onFaJ1amRF90yI4SmJhkhYsaRxpZHnoxNO0VZURMZbcCh5QLLqQFDBt55LpxER1LnUZEb/qkLKZhZiOz3YUSSeurXudxIT4VcepWZFiQHAB2kEW3djE7msyIYIv2tzGM3imP1ka6mYslxBfKtwANiDC8lvjNL8bu5BdP4sIbtmcQoyweHHNgDj9lrIxhCNWNV/E3xHivLux+mbELzn4k5VBkVaheMKeQYjVl4XU6BG/5OA3nd5iXp9PiDaU3Lfo3pmxQPxGhI3Jk0/xeFBst6WSOzPde08WiGh4bTORZveopSgUJUMk957kt4B/jWhYCul2iWUATIWTU+ndNXlAlQFx4IFqOPTlV5ekecSl9w8Vr8ukboYMajdZ3NVOSXZ5QnqHVJUUw4DIUvoOJPlTHz4D2DoIxMtZkeIesDI3jWnpvw60zc/1CwXLn8pyqhHZ7RD5XW7pfXwLRENG5/6E2kmIeaKASH4eobiPL9emFojDeL8NBje3YhQlQ1Q5FVR5MSwQ4fTxl4c9casS+qql0i9yB68yL4YyDZYJMSWEGhfXRRKuJ5OLTsvQfYT0VsibcKQi1OyldYgkw0VGjd84Ou4CxbtP7toyvBnWlQzR5KdR5RjSI/JHYQwKlmU9DCA7SlOfMLDdBJ2HyoITmhxDmjxRakTAC2qwTSiMLLKsWwHyVGzqCh7sb02RU02eKE2uLw0if6V02a3S3QcB1B6FVZk61Ik3tbm+9CHtSsSMrk7BOvADqEXUZKHW5mtT59yrPqvsRRJfQxmo+aJug7pkiHqMGnLuaRYMzRNhegwWm5G0AhCViJZLhYTQMfyP8zGTJhDfONlYnTKpy2Ebc19aXb1o860DmmzJyikaX9aeLpBtDlrF1yFUngKapLm5mrKpReYctHadSJdbAiDabvKAdzDys7pIX4rpA20IBR7bXNDtx2V024mPm5Ddpyoqw6VKj25Rp8AqF7Q8n3fzNYEC4NtTrNLkCXhVjtCqnJRVPQ0JjvhPHcMGNgShGOLj5X5OQgcn5sutcuy8ow/M1SYsc7K38+rD4+Va3qiU19XluTjlgwQnJBt1RXrAu45UVQgNfjEJjbk2ArxRKCa8KFpwNiY8yatSeC0NfjJhKlVgXRuhU98CwtmgXtE8uag7MOK7QWb7plUlSV0XWte3EFaM+DFgwGwyP+i1N51+DC7lNZi0hFIWuzozMJxh3ZHJ+GZIl/lyGxZVkSnNKHWqMyNe7oZwN8AkzMcrTRbJl6S8mhUxFdRwqxUki95H4BKYMc8vVqXcqtXeVBPFsd6TvB5SGpJxMl4Bu5hR8CHUzELXml2yumsRr+t2DmLKsDSn5vH5QWR1l7C+B53rrqkcGhDd/DdLebI42vMxoYY31vpse9TOk9U/rBhjvPPpyDxZrohJf7pKr/qHmhqWcLre9DO8WVrTrT7TsElkPdmvhqU2Hwi1wR+Xk5v9nU+S/W4rJm31R+xbh7RdSxbgTuF0CGNSPs9WhjgLKT7NbmnsgEeU/jTBydi7lmwzE0HK4saEtwfRlNwuizGPhpaBVkk9z4vdLZ266RackUK1HewgetQDbtR0ZnXWZMfJrC8RJOvy8pyfx0lbxqf5c1c+0th9aIKMvlRi1Ys+NZ0b2iYDGQZKmwlE1e44wof1+ni8HY/r9QFTtcsKifead6Sg+yX5K+0g+tXl/tRWhwUmUP3AhsP/4w/ow1ULS2+oOZuoEX1rq3OFyhxP1LjXeklcr4VphZkvaVZot0ovRK0atSMcbemrZHFVhgLAARFxAUgGgOEbq2xXMr+FK+HoQYcLizE2SDhEdmmCmN1qqRWgDeGILhRQ7wKqnhgGkU0/NmosfhNii9bbEI4KHr1ifmIIRMIelgJpHtyOWAHaEY4edmlTQiDiqgxvMEBLQnlpUlG8EUmkjD/ois0cdCD8EiKbDJZVlG0BrQlHa8uMhT6IuCDNkiE6QcZ10JlwVNod7XkgkioAAVgQxiZLpg/haGd3PNsbka+5dmN0arBFexLaJlvqiYiL6mzCQosi/W6iP+HolNodEPdBZOHavGSI8Tdhqt0PehFSfeMZKaEWvqNXJfNvSmytY3oRWk7GHr3IDVGsSNPcEJcp2ItwNLcqA+zYi4SFNhYkkzhK2gKB2m0YinA0sooIcULErF4IIDg1LRSx0rMdlHA0s9nAOwzU18UQ4wcgVJ1NhCYcaQ+l3RGrnZJ4tacj8VpxujQAoV032g9Uq51Erw7sTzgaGY9uLRHZCW9qRISx9Ix+UMKR6fjdDpFpT6yoVlALOjir0ACEdKhGJkYjYuWOyfSWDIp6DlBvQhZSbBiqJkTugtX7ZGA36PerhCxYU89oQmRnE4VGi0IxnPLLhJRRf+JiRtS40iHy5QtBSMeqNuLAhKh2pSPgNz4rCUFIdc5Bs3YY56L0X2F88NEvtYQhHI32JVKOVvfNFIuu3psfaiWhCKlstipGR0QWXR2uWQEJR6Pl7iA/x7ZHhHR07pbmR9lLUEIqp81WdpxthwjRdLtxclFYSGhCJn8lESalEZFOPVL+mb/cWYYgpLKclQfUqpOrueVCRyY6lLOgY7OWgQi5zDflFsXx6yhfROQpCWO0LTf97WqzDEnIZbmYrcp1AVgkA8VhQv9DsUGxLlezxUA9V8vghB85n0/zxWJxp3/mp3Ov7Xov+R7hr+T/hP98+d8n/A9myVw5jcDSLQAAAABJRU5ErkJggg=="
                      alt=""
                      className="icons"
                      
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/smart_swag_feb/"
                    target="blank"
                    title="Instagram"
                  >
                    <img
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhISERISFRISEhIREhIYERIREhIRGBgZGhgVGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHBISHjQhISExNDQ0MTQxNDQxNDE0NDQ0MTQ0NDQ0NDQ0NDE0NDQ0NDQ0MTQ0MTQ0NDQ0ND80NDQ/NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBgcFBP/EAEIQAAIBAgIFBwcKBgIDAAAAAAABAgMRBAYFEiExUSJBYXGBkbEHEzJScqHRFCMzNEJTc4KS4RZiY7LBwkPwRFSi/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAQCAwUBBv/EADURAAIBAwIDBgMGBwEAAAAAAAABAgMEESExEkFRImFxgaGxBRMUIzIzNJHBJFJicoLR8BX/2gAMAwEAAhEDEQA/ANeAAAAAAAAAAAAABQAQBSDE4qnTV6k4wXGTSQATClZx+c8LC6g3N8zi4yj4nDxWfKj2U6cEuL1r+5lipyfIvjbVZcjQguZTVzbi5bqjj1NnkeYsY/8AyKveTVvLqWfRz6mw3Ax5Zixn/s1e9HopZrxcd9WUutnfppdTjtZLmayBnWGz3WWydOnJceVreJ2sFnehPZUjKD48lR97IyoTXIqdGa5FqA8+Ex9Kqr0qkJ+zJM9JU1gqEAAOAAAAAAAAAAAAAKAAACAAAAAAAAAKIACnlxuPp0YuVSailzX2vqRwcwZrp0LwpWlU7XGL6dqfAzzH4+pXnr1ZOT22W2yvzK5OMMj1vYzqay0Xqy16XzxKV44Zaq+8aTuvZaKjisdVqNynOUr9LS7tx57AXxSWxq07enTXZQAIKWZJuIAAEslUogKIBPJU4igAE0yqUSWhialNpwnKLW3ZJpdxaNE50q07RrcuO69lFpdi2lSAJQjPSSF5wT3Nl0ZpijiFenNN+q+TLue06BiGFxM6clOnJxkudbHbh7i+ZdziqmrTxOrGW5TSaT4Xu3t3CdW2cdY6oVnTa2LmIEZJq63MUVKhAAAAAAAAUAAAEAAAAFEFABJSSTbaSSu29iSKNmfNLbdLDvYtkqiad3wXcGbcxNuVCk7R3Tltu9m5dG1lMYGtZ2WiqVF4IjaGtElhGiakaoxoa0SNDWiakAxoQfYRosUgwNFACaZBxAAAmmUyiAogEkyloUAAsTKZRAUQCaZRJFryvmeVFxp1XrU3ZJ88N23p3GjUasakVOElKMtqaaafajDi05SzFKhONKo705Oy/lbfN2sWr2/F2o7i04c0aYIJCSaTW1NXT6BxnlIgAAAKAAACAAoABWM36Z81DzUHy5K7fqxbe3ruju6Sxao05zfMtnW9xlWOxUqtSU5t3k7772XBEZSwaFhb/Mlxy2XueVobqkgliviNwjsJYlsd3LOX3iZ609lONru3pb9m/oJJ5IVKkacXKWxy9HaIrYh2pwbXrNPV70i1YHId0nWqNPhCzXvRc8LhIUoqMIqKWzYkr9YYjF06avOSVunb3FuTGq/EKs3inp7nBpZLwsd6cutInWUcH91FhWzbhItrXu1/K/geeWdMLzNvv+AZZXi7f8x6v4UwX3ERf4UwX3ETwvO+G4PvfwE/jnDcH3v4He0Hy7v+r9We/wDhTBfcRD+E8F9xE5/8dYbg+9/AP46w3B97+B3Ezny7rvPa8o4P7mJFPJmDe6FuohjnjC8913/AmhnTBvfNr8rf+Dv2neccbhdTl4zIEGm6dWetzJqKj4FV0rlrE4a7nDWj60NaSS6XY1XB6Uo1VeFSL9z956qlOMlaSUk+ZpNE41px3ORuKkXiWpg4F3zflZQTr4dcm/LgluVm9ZbehbLc5SB2nNSWUMKSksoBRALkVyRfsj6eulhqj2r6Nu21W9HsSLuYdQqyhKM4tqUXdNOzNdy/pNYmjGf2krTXB7f8IQuqWHxrmLTjg6YCiChWKAAACCgQY3EKnTnUe6EXLuA6ll4RTc66Rcp+Zj6MbOXBtpNFUaPRi6rqVJzbvrSb7L7CGwlKeW2enoUlSpqCGWCw+wWDiLSTA4R1akIL7clHqTe81rR+EjRpwhFJKMVe3PK21lGyNhb13N7oxaXtXi0y/wBWerFvgm+4ZpbZMT4lVbmodPdnBzNp9YaOpDbVlu4RW3bv4ozfGYqpVlr1JOUuL2nq0vinWrTm36Um10I8TRHjyzRtbaNGC68yJoa0StDGixSGSNoa0SNAqbe5N9SuWxkBC0NZNOjJb4tdjRE0XRZwaOir7FvENC8n+iKbpSrzinNycFfaklZp+8k5cKyLXFRUocTKLqVaTUrSjLenuZecoZqc2qGId27KFR8+x73foLdj9HUq1OUJwjaSavZXXSY3jqXma84RfoVZxi+iMml4HItVVhoz4yjcxaaw0bdOCkmmrpqzXFGR5r0X8mxE0lyJPWi+va17zTdAY3z+Hp1H6Uo3l0O7K95RcGpUoVbbabtf2mkQoScJ4FaLcZ8LM3AANFMZkhSy5J0p5muqcnyKsox/O2orxKySUpuMoyW+LUl1p3R2UVOLixeaNxEPBoLGKth6c16qi/aSVz3mO1h4YsKAAcACvZxxWpRUFvm7NfytMsJR86Vm6sIrdGG3ruyqvLhgxuyhx1492pWbBYdYLGfxHoxlhLD7CNHVIC6ZAhyKsuE0v/lFh01UcaFRrhbvOJkONqNXpqL+1HVzI7YWp2eI/B/Z5PP3Gt2/FGVNDWiVoa0Lpm+RtHowGj6leahTi23v4JcR2Cwkq1SMIK7k7dC6zUNDaJhhqahFcrfKXO2XwWRO6ulQWmrZw9FZLpxSlXetL1fs9TTRYKWiMNH0aFFdPmoX8CXGY2nRi5VJKK61d9RV8ZnmnFtUoOS4yvEtMlfUXDysv0RZZ6Lw8vSoUX104P8AwcTSWTMNUTdOKpy5tVRjHtSRzqGfLv5ykkuMW5Ms+jNNUMSr0pbfVdlLm5r9JJZBwuaHa1XmZXpvQNbCy5cbxd9Wa9F7vidvJeZKeHi6NZ2g5OSnzJu2/uNBx2DhWpyp1FeMk1+5kuZNDSwtVxtyJbYS22td2V+Owti+JYY7Srxuo/Lqb/8AepoGks3YWnTk6dSNSdnqxjx5nt5jLcXXdSpOpLfOcpvo1m3b3kIF1OKiW07aNFPHM1Hye1dbCyXqT1fcevO1PWwVVdNN90kcvyav5ir+L/qjt5sjfCVfy+KKHpV8zLqaXHmY6AAaSHJIBUIKTQvJGgeTvF3hUpP7FpL8zfwLoZbkbEamLjG9lUTT7E2jUjNuo4qeIpNagAALkQM6zHLWxNT+WTRoj5zN9MO+Iqv+did48RXiafwtfaSfd+54LCWH2EM7iNwY0JYksI0SUjheMjL5mftr+1HQzP8AVqn5fE5+SV8zP214I6GZfq1Ts8TUh+D5Hn6v5x/3GXtCNEjQjQnGR6AuWRtHq0q8ltfJj0bndFqxmJjShKct0U312V7Hiy3TUcLRt9qEJdrijl56xDjRjBfakm+pXH12YHnZ/b3OOrx5IpmmtK1MTUk23q35MbuyV9mzicuSJGhrIJm/GKglGOiRE0S4XF1KU1OnJxktu92fQ7bxkkMaLosGk1hmvZe0tHFUlP7asprg9tvA8ectGKvhpNK86fKjuu3ut7yt+T3FONaVO+yUda3sr9zRKkFJNPcyWzyefrx+nr9nlqYKBJXhqya4EQ2mbstTSPJr9DW/E/1R380/VKvVHxRwPJr9DW/E/wBUd/NH1Sr1LxRRL8Qwa35h+JjIogpoIfmgABSxC0j3aFquFenJb0/E2Yw/CztODXrLxNwE7zePmKVdwAAEioSW5mc6Wj8/U9tmjlB07TtiKnTJsRv/ALifeafwt4qSXd+5yrBYk1AcTKybeSGwjRK0NaJKR0umSvoZ+2vBHQzJ9Wqfl8TwZL+hn7a8Ee/Mn1afYbFN/wAP5Hnqv5z/ACMzaGtErQxoQiz0Jp2X5p4ajbmpU490UcfPdFulCfNGSj3jsk41SpypN8qPKXs7EjvaTwirUp03zp26JWdmace3TWOh5xv5F1l8n6GQNDJHt0hg50akoTTTi3bpV9jPIyiLPQJqSytiNjGSsSNNyajFNybskt7ZfFgWbyfUG8RKfNCLT/Mv2NHbsrs4WVNEfJqXK9OdnPsvbxJc0Y9UMNOV7SkrQ6Zby08/cy+fXxHuRkWJqa0nLiQD5DWNRZvYNG8mn0Nb8T/VFgzR9Uq9S8UcDyafQ1vxP9Ud7NH1Sr1R8UVS/EMCv+ZfiY0KIKPI0JIAAC1C8kS4dXnG3rR8TcDFtEU9atTS4m0sTvN4+YlW3QAACZSBT8zUrVk/Wjf3suBwszULwjPnT1ezaxa7jxUn3DdlPhrLv0KnqCOJNqiOJiG/xEDiMcT0uJHKIEky2ZM+iqfiL+1HS0/G+Hn2eJzMmy5FRcZp+5HX0xDWo1F0GzR1tl4GDX0u2+9GYtDGiRobIzYs9CT6MxsqFSM48z2q9rrgaZgMZCtBTg7praudPpXYZS0e7RWl6mGleLvF+lHmfZxHKFbh0ewheWnzlxR+8vU0DSuiKeJjaatJbpW2r4lRxeS6yfzcoyXTaH+WWbRuYaNZJN6s/Ve/3HZi09qHeGM9TKhXr2/Z27mZ1RyXiW+U4RXFSUi0aFy1Sw3KfLn6zVrdl2d45mkdNUKCevNa1tkedklFI7O6r1+z7Hvq1Iwi5SaUYq7b4Iy3NumvlNXVj9HB2jtvdq/K7iXT+ZqmJ5ELxp7dm5vdvs9v7lbZJMfs7P5fbnv7EbQxkkhjGImgaP5NF8xW/FX9qO5mt2wlX8v9yOT5O6erhpv1pp+46GdJ6uCqt8YLvkit/fPP1tbp+JkIAKPI05AAAWIWkd7JdDXxdPhHWv8ApdjVyieTrCbatR8IqPQ03fxL2I3Msz8DPq/eAAAXKgIMdQ85CUeKdusmFONZWGdTaeUUOpTs2uDaGOJ2dNYTUnrJcmXjsuctxPP1IOEnF8j0FOqpxUlzPO4jHE9EokcokC5SOxlOrapKHGLl27EWutDWjJcU17igYGv5upCfBq/VfaX+hVU4qS3SSfea1jNOnw9DI+IQcain190ZjjKDp1JQe+LseVl5zJoXznzlNctekuK27fApNSDTs1ZoSq0nSnjka9tXjWgmt+ZFJDJIkaGSR2LGCNj6eJnD0ZWGMZIviyLWdyWtjas1aUm12HlkPkRyGInMJbDJIjZLIjYxFgRyG2u0uNkPauW3KOWZVJxrVo2hHbGLSeu9v7DCeCqrVjSi5SLllfBOjhaUJK0tW8l07Tj+UTFKOHVO+2bTt7LTLdu6jKM7aT8/iHGLvCnsj7Vkpe9HKazLJiW0XVrcT8StgADqNOQosU20lvexdYh28p6NdfE07rkU5RqS4PVknYnxJLLFajSTbNDyxgfMYanDnktd9crM6wRikkluSsuoDMbbeWZbeXkUAA4cEFEAAPPj8MqkGufeiq1abi2nvRczjaYwf/JFe0u/aIXtDiXGt17DtnW4XwPZlflEjlE9MokMkZRrJnmkjt6B0sqfzc3yX6L2bHt/Y5EkQyRZTqSpy4onZ041Y8MjSVJNXW1M8OM0RRq7ZwWt63OVPR+mqlHZfWj6r+J38NmahL0m4vhqyl77GrC5pVViWniZM7SvSeYZfejzVcoUntjOa6NljzyybHmqP/vYWGGlKMt1ReBIsdSf/JD9SJqjReyRH6q5ju2Vd5L/AKnv/Ya8lf1Pf+xbPlVP7yH64h8qp/eU/wBcfiTVGn0D6246+hUnkj+p7/2GvI39T3/sW/5VT+8p/rj8Q+VU/vKf64/E6qcUH1tx19CoLIq56j7/ANiSGQqX2qs+zV+BaXjqS/5IfqRFPS1CO+rHvuTSSD6u5ezZ4cBlfC0mpKClJbpPejtRSSstyK/jM34Smtk3KXMtSXjYqmms51aqcKS1IvY9zbXXa6JJNhG3uKzzLPizt5xzNGlB0aLvOWyUla0Y2d+ffu5jNZSbbb3t3fWOqSbd22297buxgzCOEa1KhGjDCFAALkRmOhFt2W9mrZS0R8moLWXzlTlT6HtXhYq2StAurPz9SPzcHyU/tStw7UaOiivUz2UZd1U14UAgALCYoAAAIAAAAEopqzV0wFACuaSwLg7pcl+45c0XSpTUk4yV0yuaT0c4O8U3B9bt0GTdWrg+KO3saltcqXZluciRBJHomQTETSiQTIZE80QzAuiRSGSHyGSLYk8kchjHyGMYgcGMjY+QxjMQyMYyTJGRyGYkckciNkrI5DEAGMaOY0YiQlsKdrLeg54qotlqcWnOXNZPd27RMv6Bq4qolZxprbKbTSt0Pne01PR+Bp0IRp042iuttu93tfS2E6nCsLczbu5UOzHf2JMLhoU4RhBWjFJIlFEFDIAAAAFAAABAAAAAAAAUSUU1Zq64AKAFf0nodq86e1c8efsK9Vi07NWZoJ4MdoynV2tWl6yM+vZJ6w0fQ0Le+cdKmq6lGmQTOzpDQ9Wne0XKPM4xcnbpsthx6iadmrPhuM6UJQeJLBs0pxmsxeSKRHIfIZIlAuI5DJD5DGMRODGMY5jGMxODZEch7GSGYnCOQyRI+B09G5exGIfJhKK2cqcJwi10NqzGI7EJzjBZk8HFSb2IteXsoTquNSunGG9R2a0uHHoLToXKlDD2lJa819p7LdVmWBIk6nQyri/z2af6/wCiLC4aFKChTioxXMkkTAIVGWAAAAAAAAKAAACAAAAAAAAAAAACiAACtHgxeiKNT0oWfFck9wHJRUlh6kozlF5i8FUxeVHvpzVuaLi2++5ycToDEQ+xdcbr4mhALytKb20HYfEa0d9TKquFqR9KL7rkDpy9V9zNcYzzUeCOK1xzGP8A1Xzh6mRunL1X3MIYectijLuZrnmo8EOStuJqjjmcfxTpD1Msw2X8TU9GGzjdI7GDyTOW2pNRXq6t33pl8AtUUiifxGrLbCONgMtYajtUNZ8ZPWXczrwgoq0UkuCVkOAkJTnKbzJ5AQAAiAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q=="
                      alt=""
                      className="icons"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="c-right">
              <p>Your Message or Feedback will be appreciated</p>
              <form ref={formRef} onSubmit={SubmitHandler}>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  name="user_email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
          Made By Sandeep Prajapati
        </h3> */}
      </div>
    </section>
  );
}

export default Contact;
