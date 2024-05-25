export default function Subscribe() {
  return (
    <>
      <div
        id="mc_embed_shell"
        className=" text-center my-16 mx-auto max-w-xl leading-relaxed"
      >
        <div id="mc_embed_signup">
          <form
            action="https://morterubra.us22.list-manage.com/subscribe/post?u=d2137916d44feb93a873497e1&amp;id=bda96751f9&amp;f_id=003cc9e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_self"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <h2 className="max-sm:text-4xl ">
                Cadastra-se na nossa newsletter
              </h2>
              <p className="my-4">
                Na data do lançamento os inscritos da nossa lista recebem um
                desconto exclusivo.
              </p>
              <div className="mc-field-group">
                <label className=" text-red-700">seu melhor e-mail: </label>
                <input
                  type="text"
                  name="EMAIL"
                  className="required email p-2 placeholder:text-neutral-500 bg-black border-b-4 border-red-700 mb-4"
                  id="mce-EMAIL"
                  required
                  placeholder="seuemail@email.com"
                  value=""
                />
              </div>
              <div hidden>
                <input type="hidden" name="tags" value="6403" />
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
              <div aria-hidden="true">
                {/* real people should not fill this in and expect good things -
                do not remove this or risk form bot signups */}
                <input
                  type="text"
                  name="b_d2137916d44feb93a873497e1_bda96751f9"
                  tabIndex={-1}
                  value=""
                  hidden
                />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button bg-white px-4 py-3 font-sans text-black font-bold rounded-3xl cursor-pointer hover:bg-red-700 hover:text-white"
                    value="CADASTRAR"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <script
          type="text/javascript"
          src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        ></script>
      </div>
    </>
  );
}
