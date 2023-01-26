import React from "react";

const Homepage: React.FunctionComponent = () => {
  return (
    <>
      <div className="sm:columns-1 md:columns-3 space-y-4">
        <img
          src="https://picsum.photos/id/1/300"
          alt="rand"
          className="h-auto max-w-full"
        />
        <img
          src="https://picsum.photos/id/2/300"
          alt="rand"
          className="h-auto max-w-full"
        />
        <img
          src="https://picsum.photos/id/3/300"
          alt="rand"
          className="h-auto max-w-full"
        />
      </div>
      <span className="block float-right">
        Span with display:block (float-right)
      </span>
      <span className="block float-left">
        Span with display:block (float-left)
      </span>
      <div className="clear-both"></div>

      <div
        className="relative bg-slate-100 border rounded px-5 pt-5 pb-12 mb-5"
        style={{ width: "400px" }}
      >
        <img src="https://picsum.photos/id/3/300" alt="rand"  className="mx-auto"/>
        <p className="absolute bottom-0 left-0 text-red-500 whitespce-wrap text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
          distinctio?
        </p>
      </div>

      <div className="overflow-auto border border-black p-3" style={{width:"400px" , height:"200px"}}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae a, nisi blanditiis sapiente hic earum doloremque excepturi, alias facilis esse voluptatem cum sint aspernatur magni placeat minima eos assumenda voluptatibus beatae. Tempore eius facere dolores incidunt delectus amet distinctio repudiandae ipsa qui dignissimos cum mollitia accusamus velit voluptates consequuntur, vitae obcaecati impedit possimus earum exercitationem repellendus veritatis. Ab repudiandae quas rem, architecto consequatur alias animi numquam asperiores fugiat laudantium quia, delectus assumenda quisquam, totam perspiciatis facere quis voluptatibus accusantium incidunt. Nisi ipsam eligendi nesciunt delectus natus provident odit dolorem qui accusamus in ipsa molestias aliquam deserunt quia perspiciatis nam quo, optio iste. Iure labore quos impedit et eius similique quidem sit quam in natus nam repellat cupiditate temporibus ratione possimus molestiae ab quis eum vero, non fugit quia earum perspiciatis illum. In odit culpa voluptate doloremque vitae aperiam libero, officia molestiae recusandae expedita. Consequatur nobis amet quam maiores illum a dolore illo, harum aut laudantium quod temporibus itaque, nulla facere facilis, quo culpa magni? Doloribus natus nostrum hic accusamus sed illum perferendis mollitia architecto repellat, obcaecati est atque vel. Error necessitatibus accusantium dignissimos reiciendis esse repudiandae beatae, quis dolorem animi tenetur nihil, expedita, magnam ab aut voluptate. Quas consectetur odio maxime aliquid mollitia id eius libero voluptate consequuntur quia, nulla ullam dignissimos at, optio ipsam autem, beatae doloremque deserunt dolore eligendi accusamus velit enim. Suscipit beatae accusantium impedit magnam voluptatibus quis! Consequuntur tenetur quibusdam saepe nesciunt similique obcaecati molestias nam maxime ducimus, libero quam rerum, est necessitatibus at ad quos. Eum voluptatem autem corporis aperiam explicabo architecto veritatis reiciendis excepturi, suscipit sunt qui ad error dignissimos minus quaerat repellat corrupti blanditiis numquam dolorum ea. Corrupti fugit iste consequatur nisi rem autem dolore neque recusandae ullam, adipisci officia sed nobis quas cupiditate animi. Odit vel asperiores iure expedita soluta veritatis blanditiis pariatur iusto ipsam qui. Atque quidem sequi dolorum voluptatem corporis rem, eum necessitatibus consequatur at porro veniam culpa recusandae possimus, odio facilis illo voluptates? Fugit mollitia recusandae at incidunt. Magni neque molestias libero rerum voluptates ex error ducimus. Voluptatibus vero ullam blanditiis non nostrum veniam rerum possimus laudantium officiis ratione reprehenderit enim, iste sint omnis qui voluptatum exercitationem recusandae eum ipsum autem voluptas consequuntur. Officia quasi, aspernatur, laboriosam, modi deserunt non nostrum consequatur fugiat quae sequi et quibusdam tempore veritatis incidunt dolore quis. Eum tenetur rem eveniet id commodi doloremque repudiandae provident laboriosam libero. Dolores pariatur illum hic id excepturi cum error quam, tenetur sed veritatis nemo aliquam quae natus odio repudiandae delectus nostrum corrupti soluta possimus assumenda maiores numquam! Accusamus eum at consequuntur sequi! Nihil fugit atque nulla dolore iusto ad dolorum consectetur architecto suscipit sed impedit distinctio, aut quisquam deleniti vel cum itaque nisi molestias repellat nobis quis facere modi voluptatem. Excepturi sunt qui officia voluptatem, quae ex laudantium, ratione autem omnis debitis beatae quas tempore explicabo. Beatae non at optio reprehenderit mollitia consectetur ex consequuntur aliquam tenetur ducimus. Soluta dolorem distinctio placeat dignissimos eaque aperiam. Beatae, atque nesciunt labore reiciendis hic tempora possimus esse eveniet quasi accusantium.</p>
      </div>
    </>
  );
};

export default Homepage;
