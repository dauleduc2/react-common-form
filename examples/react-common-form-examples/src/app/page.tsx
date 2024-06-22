"use client";
import { useForm } from "react-hook-form";
import { FormProvider, reactHookFormAdapter } from "react-common-form";
import { AntdComponents } from "common-form-antd";
import { Button } from "antd";
type TestForm = {
  name: string;
  age: number;
};

export default function Home() {
  const methods = useForm<TestForm>();
  const onSubmit = (data: TestForm) => {
    console.log(data);
  };
  return (
    <main>
      <FormProvider<TestForm>
        components={AntdComponents<TestForm>()}
        methods={reactHookFormAdapter(methods)}
        ui="antd"
      >
        {({ TextField, SelectField }) => {
          return (
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "300px",
                gap: "16px",
                margin: "auto",
              }}
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <TextField name="name" />
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </form>
          );
        }}
      </FormProvider>
    </main>
  );
}
