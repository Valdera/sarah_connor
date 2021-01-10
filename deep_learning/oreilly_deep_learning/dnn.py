dataset_cie_total = pd.concat((train_dataset['cash_in_echannel'], test_dataset['cash_in_echannel']), axis = 0)

inputs_cie = dataset_cie_total[len(dataset_cie_total) - len(test_dataset) - timestep:].values
inputs_cie = inputs_cie.reshape(-1,1)
inputs_cie = sc_cie.transform(inputs_cie)

X_test_cie = convert_test(inputs_cie, timestep, 31)

predicted_cie= model_cie.predict(X_test_cie)
predicted_cie = sc_cie.inverse_transform(predicted_cie)