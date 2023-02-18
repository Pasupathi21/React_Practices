import {
  AppTextField,
  AppAutoComplete,
  AppBoxLayout,
  AppGridLayout,
  AppButton,
  AppCard,
  AppDivider,
  AppRadioButton,
  AppTextArea,
  AppCheckBox,
} from "../../components/index";

function DemoAddEditView(props: any) {
  return (
    <AppCard>
      <AppGridLayout container spacing={3}>
        <AppGridLayout container item xs={6}>
          <AppBoxLayout>
            <AppTextField label="First Name"></AppTextField>
          </AppBoxLayout>
        </AppGridLayout>

        <AppGridLayout container item xs={6}>
          <AppBoxLayout>
            <AppTextField label="Last Name"></AppTextField>
          </AppBoxLayout>
        </AppGridLayout>

        <AppGridLayout container item xs={6}>
          <AppBoxLayout>
            <AppTextField label="Age"></AppTextField>
          </AppBoxLayout>
        </AppGridLayout>

        <AppGridLayout container item xs={6}>
          <AppGridLayout container item xs={3}>
            <AppBoxLayout>
              <AppRadioButton></AppRadioButton>
            </AppBoxLayout>
          </AppGridLayout>

          <AppGridLayout container item xs={3}>
            <AppBoxLayout>
              <AppRadioButton></AppRadioButton>
            </AppBoxLayout>
          </AppGridLayout>
        </AppGridLayout>

        <AppGridLayout container item xs={12}>
          <AppBoxLayout>
            <AppTextArea></AppTextArea>
          </AppBoxLayout>
        </AppGridLayout>
        <AppDivider />

        <AppGridLayout container item xs={12}>
          <AppBoxLayout>
            <AppTextArea></AppTextArea>
          </AppBoxLayout>
        </AppGridLayout>
        <AppDivider />

        <AppGridLayout container item xs={12}>
          <AppBoxLayout>
            <AppAutoComplete></AppAutoComplete>
          </AppBoxLayout>
        </AppGridLayout>

        <AppGridLayout container item xs={12}>
          <AppBoxLayout>
            <AppCheckBox></AppCheckBox>
          </AppBoxLayout>
        </AppGridLayout>
      </AppGridLayout>
    </AppCard>
  );
}

export default DemoAddEditView;
